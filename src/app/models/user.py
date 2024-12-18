from datetime import UTC, datetime

from sqlalchemy import Boolean, Column, DateTime, Integer, String

from src.app.core.database import Base


class User(Base):
    __tablename__ = "users"

    key_id = Column(Integer, primary_key=True, index=True)
    username = Column(String, unique=True, index=True)
    email = Column(String, unique=True, index=True)
    password_hash = Column(String)
    is_active = Column(Boolean, default=False)
    is_verified = Column(Boolean, default=False)
    verification_code = Column(String, nullable=True)
    created_at = Column(DateTime, default=datetime.now(UTC))
    # ADD RELATIONSHIPS TO OTHER TABLES HERE
