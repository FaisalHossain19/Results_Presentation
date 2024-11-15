from sqlalchemy.orm import Session

from src.app.models.test_categories import TestCategory
from src.app.schemas.test_categories import TestCategoryCreate


# TestCategory CRUD
def create_test_category(db: Session, test_category: TestCategoryCreate, test_category_id: int):
    db_test_category = TestCategory(**test_category.model_dump(), test_category_id=test_category_id)
    db.add(db_test_category)
    db.commit()
    db.refresh(db_test_category)
    return db_test_category


def get_test_category(db: Session, test_category_id: int):
    return db.query(TestCategory).filter(TestCategory.test_category_id == test_category_id).all()


def get_test_category_by_id(db: Session, test_category_id: int):
    return (
        db.query(TestCategory)
        .filter(TestCategory.id == test_category_id, TestCategory.test_category_id == test_category_id)
        .first()
    )


def update_test_category(
    db: Session, test_category_id: int, test_category: TestCategoryCreate,
):
    db.query(TestCategory).filter(
        TestCategory.id == test_category_id, TestCategory.test_category_id == test_category_id
    ).update(test_category.model_dump())
    db.commit()
    return (
        db.query(TestCategory)
        .filter(TestCategory.id == test_category_id, TestCategory.test_category_id == test_category_id)
        .first()
    )


def delete_test_category(db: Session, test_category_id: int):
    db.query(TestCategory).filter(
        TestCategory.id == test_category_id, TestCategory.test_category_id == test_category_id
    ).delete()
    db.commit()
    return True