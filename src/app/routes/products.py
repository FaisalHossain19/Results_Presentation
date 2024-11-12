from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from ..crud import create_product, get_product_by_id, get_all_products, delete_product
from ..schemas.products import ProductCreate, ProductResponse
from ..core.database import get_db

router = APIRouter()

@router.post("/products/", response_model=ProductResponse)
def create_product_route(product: ProductCreate, db: Session = Depends(get_db)):
    return create_product(db=db, product=product)

@router.get("/products/{product_id}", response_model=ProductResponse)
def get_product_route(product_id: int, db: Session = Depends(get_db)):
    return get_product_by_id(db=db, product_id=product_id)

@router.get("/products/", response_model=list[ProductResponse])
def get_all_products_route(db: Session = Depends(get_db)):
    return get_all_products(db=db)

@router.delete("/products/{product_id}", response_model=ProductResponse)
def delete_product_route(product_id: int, db: Session = Depends(get_db)):
    return delete_product(db=db, product_id=product_id)
