from pydantic import BaseModel


class AssignmentCreate(BaseModel):
    rule_id: int
    user_id: int


class AssignmentUpdate(BaseModel):
    status: str
    proof_file: str | None = None