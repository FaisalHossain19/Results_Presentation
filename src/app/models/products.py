from sqlalchemy import Column, Integer, String

from src.app.core.database import Base


class Product(Base):
    __tablename__ = "products"
    id = Column(Integer, primary_key=True, autoincrement=True)
    product_id = Column(Integer, nullable=False, unique=True)
    product_name = Column(String, nullable=False)
    product_type = Column(String, nullable=False)
