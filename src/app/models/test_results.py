import enum
from datetime import datetime  # Correcting datetime and timezone import

from sqlalchemy import Column, DateTime, Enum, Integer, String, ForeignKey
from src.app.core.database import Base

from sqlalchemy.orm import relationship


class TestCaseResult(enum.Enum):
    passed = "passed"
    fail = "fail"
    skipped = "skipped"


class TestResult(Base):
    __tablename__ = "test_results"

    id = Column(Integer, primary_key=True, autoincrement=True)
    requirement_id = Column(Integer, nullable=False)
    test_case_id = Column(Integer, nullable=False, unique=True)
    test_case_result = Column(Enum(TestCaseResult), nullable=False)
    execution_date = Column(DateTime, default=datetime.utcnow, nullable=False)  # Default to current UTC time
    version_tested = Column(String, nullable=False)
    test_category_id= Column(Integer, ForeignKey("test_categories.id"))
    product_id=Column(Integer,ForeignKey("products.id"))
    

    test_category= relationship("TestCategory",back_populates="test_result")
    products_for_results=relationship("Product",back_populates="testing_results")
