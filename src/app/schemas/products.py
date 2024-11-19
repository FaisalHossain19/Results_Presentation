from pydantic import BaseModel


class ProductBase(BaseModel):
    product_id: str
    product_name: str
    product_type: str


class ProductsCreate(ProductBase):
    product_id: str
    product_name: str
    product_type: str
    pass


class ProductsResponse(ProductBase):
    id: int
    product_id: str
    product_name: str
    product_type: str

    class Config:
        from_attributes = True
