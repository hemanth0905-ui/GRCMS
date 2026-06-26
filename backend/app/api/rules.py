from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.db.database import get_db
from app.models.rule import Rule
from app.schemas.rule import RuleCreate
from app.core.dependencies import require_admin

router = APIRouter(
    prefix="/rules",
    tags=["Rules"]
)

@router.post("/create")
def create_rule(
    rule: RuleCreate,
    db: Session = Depends(get_db),
    admin=Depends(require_admin)
):

    new_rule = Rule(
        title=rule.title,
        description=rule.description,
        department=rule.department,
        priority=rule.priority,
        deadline=rule.deadline
    )

    db.add(new_rule)
    db.commit()
    db.refresh(new_rule)

    return {
        "message": "Rule Created",
        "id": new_rule.id
    }

@router.get("/")
def get_rules(
    db: Session = Depends(get_db)
):
    return db.query(Rule).all()