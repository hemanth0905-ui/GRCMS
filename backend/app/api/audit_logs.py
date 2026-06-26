from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.db.database import get_db
from app.models.audit_log import AuditLog

router = APIRouter(
    prefix="/audit",
    tags=["Audit Logs"]
)


@router.get("/")
def get_logs(
    db: Session = Depends(get_db)
):
    return (
        db.query(AuditLog)
        .order_by(AuditLog.id.desc())
        .all()
    )


@router.post("/")
def create_log(
    action: str,
    performed_by: str,
    db: Session = Depends(get_db)
):

    log = AuditLog(
        action=action,
        performed_by=performed_by
    )

    db.add(log)
    db.commit()
    db.refresh(log)

    return {
        "message": "Audit Log Created Successfully",
        "id": log.id
    }