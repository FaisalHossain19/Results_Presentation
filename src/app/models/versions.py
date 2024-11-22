from sqlalchemy import Column, Integer, String
from sqlalchemy.ext.declarative import declarative_base

Base = declarative_base()


class Version(Base):
    __tablename__ = "versions"
    id = Column(Integer, primary_key=True, autoincrement=True)
    version_id = Column(String, nullable=False, unique=True)
