from sqlalchemy import Column, Integer, String, ForeignKey
from sqlalchemy.ext.declarative import declarative_base
from src.app.core.database import Base
from sqlalchemy.orm import relationship


class Product(Base):
    __tablename__ = "products"
    id = Column(Integer, primary_key=True, autoincrement=True)
    product_id = Column(Integer, nullable=False, unique=True)
    product_name = Column(String, nullable=False)
    product_type = Column(String, nullable=False)

    testing_categories=relationship("TestCategory", back_populates="product_for_category")
    testing_results=relationship("TestResult",back_populates="products_for_results")
    versions=relationship("Version", back_populates="product")
