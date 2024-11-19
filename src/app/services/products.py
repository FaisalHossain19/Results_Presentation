from sqlalchemy.orm import Session

from src.app.models.products import Product
from src.app.schemas.products import ProductBase, ProductsCreate


def get_products(db: Session, product_id: int):
    return db.query(Product).filter(Product.user_id == product_id).all()


def get_product_by_product_id(db: Session, product_id: int):
    return db.query(Product).filter(Product.product_id == product_id)


def create_product(db: Session, product: ProductsCreate):
    db_product = Product(
        product_name=product.product_name,
        product_type=product.product_type,
        product_id=product.product_id,
    )
    db.add(db_product)
    db.commit()
    db.refresh(db_product)
    return db_product


# def get_product_by_id(db: Session, product_id: int, user_id: int):
#     return (
#         db.query(Product)
#         .filter(Product.id == product_id, Product.user_id == user_id)
#         .first()
#     )


def update_product_by_id(
    db: Session, product_id: int, product: ProductBase
):
    db_product = get_product_by_product_id(db, product_id)
    if product is None:
        return None
    for key, value in product.model_dump().items():
        setattr(db_product, key, value)
    db.commit()
    db.refresh(db_product)
    return db_product


def delete_product_by_id(db: Session, product_id: int):
    db.query(Product).filter(
        Product.id == product_id
    ).delete()
    db.commit()