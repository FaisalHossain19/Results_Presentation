from datetime import date
from enum import Enum

from pydantic import BaseModel


class TestCaseResult(str, Enum):
    passed = "passed"
    fail = "fail"
    skipped = "skipped"


class TestResultBase(BaseModel):
    requirement_id: int
    test_case_id: str
    test_case_result: TestCaseResult
    execution_date: date
    version_tested: str


class TestResultCreate(TestResultBase):
    test_category_name: str
    product_name: str


class TestResultResponse(TestResultBase):
    key_id: int
    test_category_name: str
    product_name: str

    class Config:
        orm_mode = True
