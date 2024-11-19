from pydantic import BaseModel


class ProductBase(BaseModel):
    product_id: str


class ProductsCreate(ProductBase):
    product_id: str
    pass


class ProductsResponse(ProductBase):
    id: int
    product_id: str

    class Config:
        from_attributes = True
