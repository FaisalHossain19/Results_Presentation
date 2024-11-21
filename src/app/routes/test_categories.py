from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session

import src.app.services.test_categories as test_categories_service
from src.app.dependencies import get_db
from src.app.schemas.test_categories import TestCategoryCreate, TestCategoryResponse

router = APIRouter()

# Create a new category
@router.post("/", response_model=TestCategoryResponse)
def create_new_category(
    category: TestCategoryCreate,
    db: Session = Depends(get_db),
):

    return test_categories_service.create_test_category(db, category)


# Get all test categories
@router.get("/", response_model=list[TestCategoryResponse])
def get_all_categories(
    db: Session = Depends(get_db)
):
    return test_categories_service.get_test_category(db)


# Get a test category by ID
@router.get("/{test_category_id}", response_model=TestCategoryResponse)
def get_test_category_details(
    test_category_id: str, db: Session = Depends(get_db),
):
    test_category = test_categories_service.get_test_category_by_id(db, test_category_id)

    if test_category is None:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND, detail="Test Category not found"
        )
    return test_category


# Update a test category by ID
@router.put("/{test_category_id}", response_model=TestCategoryResponse)
def update_test_category_details(
    test_category_id: str,
    test_category: TestCategoryCreate,
    db: Session = Depends(get_db),
):

    test_category = test_categories_service.update_test_category(
        db, test_category_id, test_category
    )
    if test_category is None:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND, detail="Test Category not found"
        )
    return test_category


# Delete a category by ID
@router.delete("/{test_category_id}")
def delete_test_category(
    test_category_id: str, db: Session = Depends(get_db)
):

    test_category = test_categories_service.delete_test_category(db, test_category_id)
    if test_category is False:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND, detail="Test Category not found"
        )
    # test_categories_service.delete_test_category_by_id(db, test_category_id)
    return {"message": "Test Category deleted successfully"}
