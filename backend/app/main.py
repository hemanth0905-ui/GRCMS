from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.db.database import Base, engine

# Import Routers
from app.api.auth import router as auth_router
from app.api.rules import router as rules_router
from app.api.assignments import router as assignments_router
from app.api.user_tasks import router as tasks_router
from app.api.users import router as users_router
from app.api.notifications import router as notifications_router
from app.api.audit_logs import router as audit_router
from app.api.reports import router as reports_router
from app.api.analytics import router as analytics_router
from app.api.uploads import router as upload_router
from app.api.profile import router as profile_router

# Create Database Tables
Base.metadata.create_all(bind=engine)

# Create FastAPI App
app = FastAPI(
    title="Governance Compliance Management System API",
    version="1.0.0"
)

# CORS Configuration
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "http://127.0.0.1:5173",
        "https://grcms-jade.vercel.app",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include Routers
app.include_router(auth_router)
app.include_router(rules_router)
app.include_router(assignments_router)
app.include_router(tasks_router)
app.include_router(users_router)
app.include_router(notifications_router)
app.include_router(audit_router)
app.include_router(reports_router)
app.include_router(analytics_router)
app.include_router(upload_router)
app.include_router(profile_router)

# Root Endpoint
@app.get("/")
def root():
    return {
        "message": "Governance Compliance Management System API is Running"
    }
from app.api.uploads import router as upload_router

app.include_router(upload_router)