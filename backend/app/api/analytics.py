from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.db.database import get_db
from app.models.user import User
from app.models.rule import Rule
from app.models.assignment import Assignment
from app.models.audit_log import AuditLog

router = APIRouter(
    prefix="/analytics",
    tags=["Analytics"]
)

@router.get("/dashboard")
def dashboard(db: Session = Depends(get_db)):
    return {
        "total_rules": db.query(Rule).count(),
        "total_users": db.query(User).count(),
        "pending": db.query(Assignment).filter(
            Assignment.status == "Pending"
        ).count(),
        "completed": db.query(Assignment).filter(
            Assignment.status == "Completed"
        ).count(),
        "violations": db.query(AuditLog).filter(
            AuditLog.status == "Violation"
        ).count(),
    }