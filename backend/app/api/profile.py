from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app.db.database import get_db
from app.models.user import User
from app.schemas.profile import ProfileUpdate

router = APIRouter(
    prefix="/profile",
    tags=["Profile"]
)

@router.get("/{user_id}")
def get_profile(
    user_id: int,
    db: Session = Depends(get_db)
):

    user = db.query(User).filter(
        User.id == user_id
    ).first()

    if not user:
        raise HTTPException(
            status_code=404,
            detail="User Not Found"
        )

    return user


@router.put("/{user_id}")
def update_profile(
    user_id: int,
    data: ProfileUpdate,
    db: Session = Depends(get_db)
):

    user = db.query(User).filter(
        User.id == user_id
    ).first()

    if not user:
        raise HTTPException(
            status_code=404,
            detail="User Not Found"
        )

    user.name = data.name
    user.department = data.department

    db.commit()

    return {
        "message":"Profile Updated Successfully"
    }