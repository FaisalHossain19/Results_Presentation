from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from ..crud import create_test_category, get_test_category_by_id, get_all_test_categories, delete_test_category
from ..schemas.test_categories import TestCategoryCreate, TestCategoryResponse
from ..dependencies import get_db

router = APIRouter()

@router.post("/test-categories/", response_model=TestCategoryResponse)
def create_test_category_route(category: TestCategoryCreate, db: Session = Depends(get_db)):
    return create_test_category(db=db, category=category)

@router.get("/test-categories/{category_id}", response_model=TestCategoryResponse)
def get_test_category_route(category_id: int, db: Session = Depends(get_db)):
    return get_test_category_by_id(db=db, category_id=category_id)

@router.get("/test-categories/", response_model=list[TestCategoryResponse])
def get_all_test_categories_route(db: Session = Depends(get_db)):
    return get_all_test_categories(db=db)

@router.delete("/test-categories/{category_id}", response_model=TestCategoryResponse)
def delete_test_category_route(category_id: int, db: Session = Depends(get_db)):
    return delete_test_category(db=db, category_id=category_id)
