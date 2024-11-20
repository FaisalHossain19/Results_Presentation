from datetime import date
from enum import Enum

from pydantic import BaseModel


class TestCaseResult(str, Enum):
    passed = "passed"
    fail = "fail"
    skipped = "skipped"


class TestResultBase(BaseModel):
    requirement_id: int
    test_case_id: int
    test_case_result: TestCaseResult
    execution_date: date
    version_tested: str


class TestResultCreate(TestResultBase):
    pass


class TestResultResponse(TestResultBase):
    id: int

    class Config:
        orm_mode = True
