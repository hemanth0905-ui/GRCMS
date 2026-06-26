from fastapi import APIRouter,Depends
from sqlalchemy.orm import Session

from app.db.database import get_db

from app.models.user import User
from app.models.rule import Rule
from app.models.assignment import Assignment

router=APIRouter(
    prefix="/reports",
    tags=["Reports"]
)


@router.get("/")
def reports(
    db:Session=Depends(get_db)
):

    total_users=db.query(User).count()

    total_rules=db.query(Rule).count()

    completed=db.query(
        Assignment
    ).filter(
        Assignment.status=="Completed"
    ).count()

    pending=db.query(
        Assignment
    ).filter(
        Assignment.status=="Pending"
    ).count()

    return{

        "users":total_users,

        "rules":total_rules,

        "completed":completed,

        "pending":pending

    }