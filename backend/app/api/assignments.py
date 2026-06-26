from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app.db.database import get_db
from app.models.assignment import Assignment
from app.schemas.assignment import (
    AssignmentCreate,
    AssignmentUpdate
)

router = APIRouter(
    prefix="/assignments",
    tags=["Assignments"]
)


@router.post("/")
def assign_rule(
    assignment: AssignmentCreate,
    db: Session = Depends(get_db)
):

    new_assignment = Assignment(
        rule_id=assignment.rule_id,
        user_id=assignment.user_id
    )

    db.add(new_assignment)
    db.commit()
    db.refresh(new_assignment)

    return {
        "message": "Rule Assigned",
        "assignment": new_assignment
    }


@router.get("/")
def get_assignments(
    db: Session = Depends(get_db)
):
    return db.query(Assignment).all()


@router.put("/{assignment_id}")
def update_assignment(
    assignment_id: int,
    data: AssignmentUpdate,
    db: Session = Depends(get_db)
):

    assignment = db.query(
        Assignment
    ).filter(
        Assignment.id == assignment_id
    ).first()

    if not assignment:
        raise HTTPException(
            status_code=404,
            detail="Assignment not found"
        )

    assignment.status = data.status

    assignment.proof_file = data.proof_file

    db.commit()

    return {
        "message": "Assignment Updated"
    }


@router.delete("/{assignment_id}")
def delete_assignment(
    assignment_id: int,
    db: Session = Depends(get_db)
):

    assignment = db.query(
        Assignment
    ).filter(
        Assignment.id == assignment_id
    ).first()

    if not assignment:
        raise HTTPException(
            status_code=404,
            detail="Assignment not found"
        )

    db.delete(assignment)

    db.commit()

    return {
        "message": "Assignment Deleted"
    }