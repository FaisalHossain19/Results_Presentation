from sqlalchemy import Column, ForeignKey, Integer, String
from sqlalchemy.orm import relationship

from src.app.core.database import Base


class TestCategory(Base):
    __tablename__ = "test_categories"
    key_id = Column(Integer, primary_key=True, autoincrement=True)
    test_category_id = Column(String, nullable=False, unique=True)
    products_id = Column(Integer, ForeignKey("products.key_id"))
    version_id = Column(Integer, ForeignKey("versions.key_id"))

    version_for_category = relationship("Version", back_populates="categories")
    product_for_category = relationship("Product", back_populates="testing_categories")

    test_result = relationship("TestResult", back_populates="test_category")
