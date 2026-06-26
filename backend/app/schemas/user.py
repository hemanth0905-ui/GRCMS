from pydantic import BaseModel, EmailStr


class UserCreate(BaseModel):
    name: str
    email: EmailStr
    password: str
    department: str
    role: str


class UserUpdate(BaseModel):
    name: str
    department: str
    role: str


class UserResponse(BaseModel):
    id: int
    name: str
    email: EmailStr
    department: str
    role: str

    class Config:
        from_attributes = True