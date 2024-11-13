from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from ..crud import create_user, get_user_by_id, get_user_by_email, get_all_users, delete_user
from ..schemas.user import UserCreate, UserResponse
from ..dependencies import get_db

router = APIRouter()

@router.post("/users/", response_model=UserResponse)
def create_user_route(user: UserCreate, db: Session = Depends(get_db)):
    return create_user(db=db, user=user)

@router.get("/users/{user_id}", response_model=UserResponse)
def get_user_route(user_id: int, db: Session = Depends(get_db)):
    return get_user_by_id(db=db, user_id=user_id)

@router.get("/users/", response_model=list[UserResponse])
def get_all_users_route(db: Session = Depends(get_db)):
    return get_all_users(db=db)

@router.delete("/users/{user_id}", response_model=UserResponse)
def delete_user_route(user_id: int, db: Session = Depends(get_db)):
    return delete_user(db=db, user_id=user_id)
