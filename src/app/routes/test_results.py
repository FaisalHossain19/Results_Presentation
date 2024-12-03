from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session

import src.app.services.test_results as test_results_service
from src.app.dependencies import get_db
from src.app.schemas.test_results import TestResultCreate, TestResultResponse

router = APIRouter()


@router.post("/", response_model=TestResultResponse)
def create_new_test_result(
    test_results: TestResultCreate,
    db: Session = Depends(get_db),
):
    result = test_results_service.create_test_result(db, test_results)
    if result is None:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Test Category not found")
    return result


@router.get("/", response_model=list[TestResultResponse])
def read_test_results(db: Session = Depends(get_db)):
    return test_results_service.get_test_result(db)


@router.get("/{test_result_id}", response_model=list[TestResultResponse])
def read_test_result(
    test_result_id: str,
    db: Session = Depends(get_db),
):
    results = test_results_service.get_test_result_by_id(db, test_result_id)
    if results is None:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Test Category not found")
    return results


@router.get("/product/{product_name}", response_model=list[TestResultResponse])
def get_results_for_product(product_name: str, db: Session = Depends(get_db)):
    results = test_results_service.get_test_results_by_product_name(db, product_name)

    if not results:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail=f"No test results found for product ID {product_name}",
        )
    return results


@router.put("/{test_result_id}", response_model=TestResultResponse)
def update_test_result_details(
    test_result_id: int,
    test_result: TestResultCreate,
    db: Session = Depends(get_db),
):
    return test_results_service.update_test_result(db, test_result, test_result_id)


@router.delete("/{test_result_id}")
def delete_test_result_route(
    test_result_id: int,
    db: Session = Depends(get_db),
):
    return test_results_service.delete_test_result(db, test_result_id)
