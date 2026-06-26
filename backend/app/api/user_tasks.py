from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.db.database import get_db
from app.models.assignment import Assignment

router = APIRouter(
    prefix="/tasks",
    tags=["Tasks"]
)

@router.get("/all")
def get_all_tasks(
    db: Session = Depends(get_db)
):
    return db.query(Assignment).all()