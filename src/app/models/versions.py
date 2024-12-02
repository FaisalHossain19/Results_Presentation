from sqlalchemy import Column, ForeignKey, Integer, String
from sqlalchemy.orm import relationship

from src.app.core.database import Base


class Version(Base):
    __tablename__ = "versions"
    key_id = Column(Integer, primary_key=True, autoincrement=True)
    version_id = Column(String, nullable=False, unique=True)
    product_id = Column(Integer, ForeignKey("products.key_id"))

    product = relationship("Product", back_populates="versions")
    categories = relationship("TestCategory", back_populates="version_for_category")
