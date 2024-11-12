import enum
from datetime import datetime  # Correcting datetime and timezone import

from sqlalchemy import Column, DateTime, Enum, Integer, String
from sqlalchemy.ext.declarative import declarative_base

Base = declarative_base()


class TestCaseResult(enum.Enum):
    passed = "pass"
    fail = "fail"
    skipped = "skipped"


class TestResult(Base):
    __tablename__ = "test_results"

    id = Column(Integer, primary_key=True, autoincrement=True)
    requirement_id = Column(Integer, nullable=False)
    test_case_id = Column(String, nullable=False)
    test_case_result = Column(Enum(TestCaseResult), nullable=False)
    execution_date = Column(DateTime, default=datetime.utcnow, nullable=False)  # Default to current UTC time
    version_tested = Column(String, nullable=False)
