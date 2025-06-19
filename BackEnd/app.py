from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, EmailStr
from sqlalchemy import create_engine, Column, Integer, String, Text
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker

# Database settings
DATABASE_URL = "postgresql+psycopg2://ompandey:admin%401200@localhost/ryo"

# SQLAlchemy setup
engine = create_engine(DATABASE_URL)
SessionLocal = sessionmaker(bind=engine)
Base = declarative_base()

# FastAPI app
app = FastAPI()

# Enable CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # Allow your frontend origin
    allow_credentials=True,
    allow_methods=["*"],  # Allow all methods (GET, POST, OPTIONS, etc.)
    allow_headers=["*"],  # Allow all headers
)

# Define DB model
class ContactMessage(Base):
    __tablename__ = "contact_messages"

    id = Column(Integer, primary_key=True, index=True)
    first_name = Column(String(100))
    last_name = Column(String(100))
    email = Column(String(100))
    phone = Column(String(20))
    subject = Column(String(200))
    message = Column(Text)

# Create the table
Base.metadata.create_all(bind=engine)

# Define Pydantic model
class ContactForm(BaseModel):
    first_name: str
    last_name: str
    email: EmailStr
    phone: str
    subject: str
    message: str

# API endpoint to receive form data
@app.post("/submit-form/")
async def submit_form(form: ContactForm):
    db = SessionLocal()
    new_message = ContactMessage(
        first_name=form.first_name,
        last_name=form.last_name,
        email=form.email,
        phone=form.phone,
        subject=form.subject,
        message=form.message
    )
    db.add(new_message)
    db.commit()
    db.refresh(new_message)
    db.close()
    return {"message": "Form submitted successfully!"}