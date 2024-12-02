from sqlalchemy.orm import Session
from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.exc import SQLAlchemyError
from src.app.models.products import Product
from src.app.models.test_categories import TestCategory
from src.app.models.versions import Version
from src.app.schemas.test_categories import TestCategoryCreate


def create_test_category(db: Session, test_category: TestCategoryCreate):
    # Fetch the product ID using the product name
    product = db.query(Product).filter(Product.product_name == test_category.product_name).first()
    if not product:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Product not found.")

    # Fetch the version ID using the version name
    version = db.query(Version).filter(Version.version_id == test_category.version_name).first()
    if not version:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Version not found.")

    # Insert a new TestCategory, with the same test_category_id for different versions
    db_test_category = TestCategory(
        test_category_id=test_category.test_category_id,  # Same ID allowed
        products_id=product.key_id,
        version_id=version.key_id,
    )
    db.add(db_test_category)
    db.commit()
    db.refresh(db_test_category)

    return {
        "key_id": db_test_category.key_id,
        "test_category_id": db_test_category.test_category_id,
        "product_name": product.product_name,
        "version_name": version.version_id,
    }





def get_test_category(db: Session):
    # Fetch all test categories along with the related product and version data
    categories = db.query(TestCategory).join(Product, Product.key_id == TestCategory.products_id).join(Version, Version.key_id == TestCategory.version_id).all()

    # Add the related data (product_name and version_name) to the response
    return [
        {
            "key_id": category.key_id,
            "test_category_id": category.test_category_id,
            "product_name": category.product_for_category.product_name,
            "version_name": category.version_for_category.version_id,
        }
        for category in categories
    ]


def get_test_category_by_id(db: Session, test_category_id: str):
    # Query the TestCategory with joins to Product and Version
    test_categories = (
        db.query(TestCategory)
        .join(Product, TestCategory.products_id == Product.key_id)
        .join(Version, TestCategory.version_id == Version.key_id)
        .filter(TestCategory.test_category_id == test_category_id)
        .all()
    )

    if not test_categories:
        return None

    # Return the related data (product_name, version_name)
    return [
        {
            "key_id": test_category.key_id,
            "test_category_id": test_category.test_category_id,
            "product_name": test_category.product_for_category.product_name,
            "version_name": test_category.version_for_category.version_id,
        }
        for test_category in test_categories
    ]


def update_test_category(
    db: Session,
    test_category_id: str,
    test_category: TestCategoryCreate,
):
    db_test_category = db.query(TestCategory).filter(TestCategory.test_category_id == test_category_id).first()
    if db_test_category is None:
        return None
    for key, value in test_category.model_dump().items():
        setattr(db_test_category, key, value)
    db.commit()
    db.refresh(db_test_category)
    return db_test_category


def delete_test_category(db: Session, test_category_id: str):
    try:
        test_category = db.query(TestCategory).filter(TestCategory.test_category_id == test_category_id).first()
        if not test_category:
            return False

        db.delete(test_category)
        db.commit()
        return True
    except SQLAlchemyError as e:
        db.rollback()
        raise e
