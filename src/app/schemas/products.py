from pydantic import BaseModel


class ProductBase(BaseModel):
    product_id: str


class ProductsCreate(ProductBase):
    pass


class ProductsResponse(ProductBase):
    id: int

    class Config:
        orm_mode = True
