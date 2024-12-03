from fastapi import HTTPException
from sqlalchemy.orm import Session

from src.app.models.products import Product
from src.app.models.test_categories import TestCategory
from src.app.models.test_results import TestResult
from src.app.schemas.test_results import TestResultCreate, TestResultResponse


# TestResult CRUD
def create_test_result(db: Session, test_result: TestResultCreate):
    # Validate if the referenced test category exists
    test_category = (
        db.query(TestCategory).filter(TestCategory.test_category_id == test_result.test_category_name).first()
    )
    if not test_category:
        return None  # Or raise an exception, e.g., ValueError("Test category not found")

    # Validate if the referenced product exists
    product = db.query(Product).filter(Product.product_name == test_result.product_name).first()
    if not product:
        return None  # Or raise an exception, e.g., ValueError("Product not found")
    # Create a new TestResult instance
    db_test_result = TestResult(
        requirement_id=test_result.requirement_id,
        test_case_id=test_result.test_case_id,
        test_case_result=test_result.test_case_result,
        execution_date=test_result.execution_date,
        version_tested=test_result.version_tested,
        test_category_id=test_category.key_id,  # Assuming a foreign key relationship
        product_id=product.key_id,  # Assuming a foreign key relationship
    )

    # Add and commit the new object
    db.add(db_test_result)
    db.commit()
    db.refresh(db_test_result)

    # Construct and return the response object
    return TestResultResponse(
        key_id=db_test_result.key_id,
        requirement_id=db_test_result.requirement_id,
        test_case_id=db_test_result.test_case_id,
        test_case_result=db_test_result.test_case_result,
        execution_date=db_test_result.execution_date,
        version_tested=db_test_result.version_tested,
        test_category_name=test_category.test_category_id,  # Fetch name from TestCategory
        product_name=product.product_name,  # Fetch name from Product
    )


def get_test_result(db: Session):
    results = (
        db.query(TestResult)
        .join(TestCategory, TestCategory.key_id == TestResult.test_category_id)
        .join(Product, Product.key_id == TestResult.product_id)
        .all()
    )
    return [
        {
            "key_id": result.key_id,
            "requirement_id": result.requirement_id,
            "test_case_id": result.test_case_id,
            "test_case_result": result.test_case_result,
            "execution_date": result.execution_date,
            "version_tested": result.version_tested,
            "test_category_name": result.test_category.test_category_id,
            "product_name": result.products_for_results.product_name,
        }
        for result in results
    ]


def get_test_result_by_id(db: Session, test_case_id: str):
    return db.query(TestResult).filter(TestResult.test_case_id == test_case_id).all()


def get_test_results_by_product_name(db: Session, product_name: str):
    # Find all products that match the product_name
    products = db.query(Product).filter(Product.product_name == product_name).all()
    if not products:
        return []

    # Initialize an empty list to store the results
    all_test_results = []

    # Iterate through each product and get the associated test results
    for product in products:
        # Query test results with joins for test_category_name and product_name
        test_results = (
            db.query(TestResult)
            .join(Product, TestResult.product_id == Product.key_id)
            .join(TestCategory, TestResult.test_category_id == TestCategory.key_id)
            .filter(TestResult.product_id == product.key_id)
            .all()
        )

        # Map results to TestResultResponse schema for the current product
        product_test_results = [
            TestResultResponse(
                key_id=test_result.key_id,
                requirement_id=test_result.requirement_id,
                test_case_id=test_result.test_case_id,
                test_case_result=test_result.test_case_result,
                execution_date=test_result.execution_date,
                version_tested=test_result.version_tested,
                test_category_name=test_result.test_category.test_category_id,  # Accessing via join
                product_name=product.product_name,  # Now accessing the product directly
            )
            for test_result in test_results
        ]

        # Add the results for the current product to the overall list
        all_test_results.extend(product_test_results)

    # Return all results for the matched products
    return all_test_results


def update_test_result(db: Session, test_result: TestResultCreate, test_case_id: int):
    db_test_result = get_test_result_by_id(db, test_case_id)
    if db_test_result is None:
        raise HTTPException(status_code=404, detail="Test Result not found")
    for key, value in test_result.model_dump().items():
        setattr(db_test_result, key, value)
    db.commit()
    db.refresh(db_test_result)
    return db_test_result


def delete_test_result(db: Session, test_case_id: int):
    db.query(TestResult).filter(TestResult.test_case_id == test_case_id).delete()
    db.commit()
    return True
