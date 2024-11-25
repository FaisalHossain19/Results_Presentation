from sqlalchemy import Column, Integer, String, ForeignKey
from src.app.core.database import Base
from sqlalchemy.orm import relationship


class Version(Base):
    __tablename__ = "versions"
    id = Column(Integer, primary_key=True, autoincrement=True)
    version_id = Column(String, nullable=False, unique=True)
