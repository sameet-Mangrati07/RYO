# Project Setup Guide

## 🚀 Quick Start

### Frontend Dependency Issues

If you encounter dependency-related issues, use the following command to resolve them:

```bash
npm install --legacy-peer-deps
```

**Copy and paste this command to resolve dependency conflicts.**

---

## 🔧 Backend Setup

### 1. Create Virtual Environment

First, create and activate a virtual environment for the backend:

```bash
# Create virtual environment
python -m venv venv

# Activate virtual environment
# For Windows:
venv\Scripts\activate
# For macOS/Linux:
source venv/bin/activate
```

### 2. Install Required Dependencies

Install the necessary backend packages:

```bash
pip install fastapi uvicorn sqlalchemy psycopg2-binary pydantic
```

**Make sure to copy and paste this exact command for proper installation.**

---

## 🗄️ Database Configuration

### Default Database Settings

Configure your `app.py` with the following database credentials (customize based on your preferences):

```python
# Database Configuration
DATABASE_NAME = "ryo"
DATABASE_USER = "ompandey"
DATABASE_PASSWORD = "admin@1200"
DATABASE_HOST = "localhost"
DATABASE_PORT = "5432"
```

### 📝 Customization Note

**You can change the username and password based on your preferences:**

- **Database Name:** `ryo`
- **Username:** `ompandey` (changeable)
- **Password:** `admin@1200` (changeable)

### Example Connection String

```python
DATABASE_URL = f"postgresql://{DATABASE_USER}:{DATABASE_PASSWORD}@{DATABASE_HOST}:{DATABASE_PORT}/{DATABASE_NAME}"
```

---

## ⚡ Prerequisites

### PostgreSQL Requirements

**Important:** Make sure you have PostgreSQL running on your machine before proceeding.

#### Check PostgreSQL Status

```bash
# Check if PostgreSQL is running
# For Windows:
pg_ctl status

# For macOS:
brew services list | grep postgresql

# For Linux:
sudo systemctl status postgresql
```

#### Start PostgreSQL Service

```bash
# For Windows:
pg_ctl start

# For macOS:
brew services start postgresql

# For Linux:
sudo systemctl start postgresql
```

### Database Connection Verification

1. **Check PostgreSQL Connection:**
   ```bash
   psql -h localhost -U your_username -d postgres
   ```

2. **Create Database:**
   ```sql
   CREATE DATABASE ryo;
   ```

3. **Grant Privileges:**
   ```sql
   GRANT ALL PRIVILEGES ON DATABASE ryo TO ompandey;
   ```

---

## 🔒 Security & Permissions

### Ensure Proper Database Privileges

Make sure your database user has the necessary privileges:

```sql
-- Connect to PostgreSQL as superuser
CREATE USER ompandey WITH PASSWORD 'admin@1200';
ALTER USER ompandey CREATEDB;
GRANT ALL PRIVILEGES ON DATABASE ryo TO ompandey;
```

---

## 📋 Installation Checklist

- [ ] Install Node.js dependencies with legacy peer deps
- [ ] Create and activate virtual environment
- [ ] Install Python backend dependencies
- [ ] Configure PostgreSQL database
- [ ] Verify database connection
- [ ] Update `app.py` with your preferred settings
- [ ] Check PostgreSQL service status
- [ ] Grant proper database privileges

---

## 🛠️ Troubleshooting

### Common Issues

1. **Dependency Conflicts:** Use `npm install --legacy-peer-deps`
2. **Database Connection:** Verify PostgreSQL is running and credentials are correct
3. **Permission Errors:** Ensure proper database privileges are granted
4. **Virtual Environment:** Make sure it's activated before installing Python packages

### Quick Commands Reference

```bash
# Frontend dependency fix
npm install --legacy-peer-deps

# Backend setup
python -m venv venv && source venv/bin/activate  # Linux/macOS
pip install fastapi uvicorn sqlalchemy psycopg2-binary pydantic

# PostgreSQL check
sudo systemctl status postgresql  # Linux
brew services list | grep postgresql  # macOS
```

---

## 📞 Support

If you encounter any issues during setup, make sure to:

1. Verify all prerequisites are installed
2. Check database connection and privileges
3. Ensure virtual environment is properly activated
4. Confirm PostgreSQL service is running

**Note:** Remember to customize the database credentials according to your preferences while maintaining security best practices.