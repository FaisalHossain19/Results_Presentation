from sqlalchemy.orm import Session

from src.app.models.test_results import TestResult
from src.app.schemas.test_results import TestResultCreate, TestResultBase


# TestResult CRUD
def create_test_result(db: Session, test_result: TestResultCreate, test_case_id: int):
    db_test_result = TestResult(**test_result.model_dump(), test_case_id=test_case_id)
    db.add(db_test_result)
    db.commit()
    db.refresh(db_test_result)
    return db_test_result


def get_test_result(db: Session, test_case_id: int):
    return db.query(TestResult).filter(TestResult.test_case_id == test_case_id).all()


def get_test_result(db: Session, test_category_id: int, test_case_id: int):
    return (
        db.query(TestResult)
        .filter(TestResult.id == test_category_id, TestResult.test_case_id == test_case_id)
        .first()
    )


def update_test_result(
    db: Session, test_result_id: int, test_result: TestResultCreate, test_case_id: int
):
    db.query(TestResult).filter(
        TestResult.id == test_result_id, TestResult.test_case_id == test_case_id
    ).update(test_result.model_dump())
    db.commit()
    return (
        db.query(TestResult)
        .filter(TestResult.id == test_result_id, TestResult.test_case_id == test_case_id)
        .first()
    )


def delete_test_result(db: Session, TestResult_id: int, test_case_id: int):
    db.query(TestResult).filter(
        TestResult.id == TestResult_id, TestResult.test_case_id == test_case_id
    ).delete()
    db.commit()
    return True