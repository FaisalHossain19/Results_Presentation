from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from ..crud import create_test_result, get_test_result_by_id, get_all_test_results, delete_test_result
from ..schemas.test_results import TestResultCreate, TestResultResponse
from ..core.database import get_db

router = APIRouter()

@router.post("/test-results/", response_model=TestResultResponse)
def create_test_result_route(result: TestResultCreate, db: Session = Depends(get_db)):
    return create_test_result(db=db, result=result)

@router.get("/test-results/{result_id}", response_model=TestResultResponse)
def get_test_result_route(result_id: int, db: Session = Depends(get_db)):
    return get_test_result_by_id(db=db, result_id=result_id)

@router.get("/test-results/", response_model=list[TestResultResponse])
def get_all_test_results_route(db: Session = Depends(get_db)):
    return get_all_test_results(db=db)

@router.delete("/test-results/{result_id}", response_model=TestResultResponse)
def delete_test_result_route(result_id: int, db: Session = Depends(get_db)):
    return delete_test_result(db=db, result_id=result_id)
