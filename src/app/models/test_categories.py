from sqlalchemy import Column, Integer, String
from sqlalchemy.ext.declarative import declarative_base

Base = declarative_base()


class TestCategory(Base):
    __tablename__ = "test_categories"
    id = Column(Integer, primary_key=True, autoincrement=True)
    test_category_id = Column(String, nullable=False, unique=True)