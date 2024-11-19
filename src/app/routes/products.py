from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session

import src.app.services.products as products_service
import src.app.services.user as user_service
from src.app.core.auth import decode_access_token, oauth2_scheme
from src.app.dependencies import get_db
from src.app.schemas.products import ProductsCreate, ProductsResponse

router = APIRouter()


@router.post("/", response_model=ProductsResponse)
def create_new_product(
    product: ProductsCreate,
    db: Session = Depends(get_db),
    token: str = Depends(oauth2_scheme),
):
    username = decode_access_token(token).username
    print(username)
    user = user_service.get_user_by_username(db, username).id
    return products_service.create_product(db, product)


@router.get("/", response_model=list[ProductsResponse])
def read_products_from_type(
    product_type: str,
    db: Session = Depends(get_db)
):
    return products_service.get_products_by_type(db, product_type)


@router.get("/{product_id}", response_model=ProductsResponse)
def read_product_by_id(
    product_id: str,
    db: Session = Depends(get_db),
):
    product = products_service.get_product_by_product_id(db, product_id)
    print(product)
    if product is None:
        raise HTTPException(status_code=404, detail="Product not found")
    return product

@router.put("/{product_id}", response_model=ProductsResponse)
def update_product_details(
    product_id: int,
    product: ProductsCreate,
    db: Session = Depends(get_db),
):
    return products_service.update_product_by_id(
        db, product_id, product
    )


@router.delete("/{product_id}")
def delete_product_route(
    product_id: int,
    db: Session = Depends(get_db),
):

    return products_service.delete_product_by_id(db, product_id)