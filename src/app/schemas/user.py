from datetime import datetime

from pydantic import BaseModel, EmailStr


class UserBase(BaseModel):
    username: str
    email: EmailStr


class UserCreate(UserBase):
    password: str


class User(UserBase):
    key_id: int
    is_active: bool
    is_verified: bool
    created_at: datetime

    class Config:
        from_attributes = True


class UserResponse(BaseModel):
    key_id: int
    username: str
    email: EmailStr
    created_at: datetime

    class Config:
        from_attributes = True
