from sqlalchemy import Column, Integer, String

from src.app.core.database import Base


class TestCategory(Base):
    __tablename__ = "test_categories"
    id = Column(Integer, primary_key=True, autoincrement=True)
    test_category_id = Column(String, nullable=False, unique=True)
