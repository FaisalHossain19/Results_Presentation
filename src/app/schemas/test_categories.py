from pydantic import BaseModel


class TestCategoryBase(BaseModel):
    test_category_id: str


class TestCategoryCreate(TestCategoryBase):
    pass


class TestCategoryResponse(TestCategoryBase):
    id: int

    class Config:
        orm_mode = True
