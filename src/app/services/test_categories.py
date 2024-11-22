from sqlalchemy.orm import Session

from src.app.models.test_categories import TestCategory
from src.app.schemas.test_categories import TestCategoryCreate


# TestCategory CRUD
def create_test_category(db: Session, test_category: TestCategoryCreate):
    db_test_category = TestCategory(**test_category.model_dump())
    db.add(db_test_category)
    db.commit()
    db.refresh(db_test_category)
    return db_test_category


def get_test_category(db: Session):
    return db.query(TestCategory).all()


def get_test_category_by_id(db: Session, test_category_id: str):
    return db.query(TestCategory).filter(TestCategory.test_category_id == test_category_id).first()


def update_test_category(
    db: Session,
    test_category_id: str,
    test_category: TestCategoryCreate,
):
    db_test_category = get_test_category_by_id(db, test_category_id)
    if db_test_category is None:
        return None
    for key, value in test_category.model_dump().items():
        setattr(db_test_category, key, value)
    db.commit()
    db.refresh(db_test_category)
    return db_test_category


def delete_test_category(db: Session, test_category_id: str):
    db_test_category = get_test_category_by_id(db, test_category_id)
    if db_test_category is None:
        return False
    db.delete(db_test_category)
    db.commit()
    return True
