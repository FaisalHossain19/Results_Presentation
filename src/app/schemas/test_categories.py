from pydantic import BaseModel


class TestCategoryBase(BaseModel):
    test_category_id: str


class TestCategoryCreate(TestCategoryBase):
    product_name: str
    version_name: str


class TestCategoryResponse(TestCategoryBase):
    key_id: int
    product_name: str
    version_name: str

    class Config:
        from_attributes = True
