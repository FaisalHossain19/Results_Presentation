from sqlalchemy.orm import Session

from src.app.models.test_results import TestResult
from src.app.schemas.test_results import TestResultCreate


# TestResult CRUD
def create_test_result(db: Session, test_result: TestResultCreate):
    db_test_result = TestResult(**test_result.model_dump())
    if db_test_result is None:
        return None
    db.add(db_test_result)
    db.commit()
    db.refresh(db_test_result)
    return db_test_result


def get_test_result(db: Session):
    return db.query(TestResult).all()


def get_test_result_by_id(db: Session, test_case_id: int):
    return (
        db.query(TestResult)
        .filter(TestResult.test_case_id == test_case_id)
        .first()
    )


def update_test_result(
    db: Session, test_result: TestResultCreate, test_case_id: int
):
    db_test_result = get_test_result_by_id(db, test_case_id)
    if db_test_result is None:
        return None
    for key, value in test_result.model_dump().items():
        setattr(db_test_result, key, value)
    db.commit()
    db.refresh(db_test_result)
    return db_test_result


def delete_test_result(db: Session, test_case_id: int):
    db.query(TestResult).filter(
        TestResult.test_case_id == test_case_id
    ).delete()
    db.commit()
    return True
