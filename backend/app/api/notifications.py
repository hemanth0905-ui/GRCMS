from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.db.database import get_db
from app.models.notification import Notification

router = APIRouter(
    prefix="/notifications",
    tags=["Notifications"]
)


@router.get("/")
def get_notifications(
    db: Session = Depends(get_db)
):
    return db.query(Notification).all()


@router.post("/")
def create_notification(
    user_id: int,
    message: str,
    db: Session = Depends(get_db)
):

    notification = Notification(
        user_id=user_id,
        message=message
    )

    db.add(notification)
    db.commit()

    return {
        "message": "Notification Created"
    }