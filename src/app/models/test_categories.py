from sqlalchemy import Column, Integer, String, ForeignKey
from sqlalchemy.ext.declarative import declarative_base
from src.app.core.database import Base
from sqlalchemy.orm import relationship


class TestCategory(Base):
    __tablename__ = "test_categories"
    key_id = Column(Integer, primary_key=True, autoincrement=True)
    test_category_id = Column(String, nullable=False, unique=True)
    products_id=Column(Integer,ForeignKey("products.id"))
    version_id=Column(Integer, ForeignKey("versions.id"))

    version_for_category=relationship("Version",back_populates="categories")
    product_for_category=relationship("Product",back_populates="testing_categories")

    test_result=relationship("TestResult",back_populates="test_category")
