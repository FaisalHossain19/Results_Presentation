from sqlalchemy import Column, Integer, String

from src.app.core.database import Base


class Version(Base):
    __tablename__ = "versions"
    key_id = Column(Integer, primary_key=True, autoincrement=True)
    version_id = Column(String, nullable=False, unique=True)
