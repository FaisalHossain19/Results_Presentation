from pydantic import BaseModel


class TestCategoryBase(BaseModel):
    test_category_id: str


class TestCategoryCreate(TestCategoryBase):
    test_category_id: str
    pass


class TestCategoryResponse(TestCategoryBase):
    id: int
    test_category_id: str
    class Config:
        orm_mode = True
