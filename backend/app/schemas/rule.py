from pydantic import BaseModel
from datetime import date

class RuleCreate(BaseModel):
    title: str
    description: str
    department: str
    priority: str
    deadline: date

class RuleResponse(BaseModel):
    id: int
    title: str
    description: str
    department: str
    priority: str

    class Config:
        from_attributes = True