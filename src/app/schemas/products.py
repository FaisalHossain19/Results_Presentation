from pydantic import BaseModel


class ProductBase(BaseModel):
    product_id: str


class ProductCreate(ProductBase):
    pass


class ProductResponse(ProductBase):
    id: int

    class Config:
        orm_mode = True
