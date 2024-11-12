from fastapi import APIRouter
router = APIRouter()

router.get("/")
def get_products():
    pass

@router.post("/{product_id}")
def post_product():
    pass

@router.get("/{prodcut_id}")
def get_product():
    pass

@router.put("/{product_id}")
def put_prodcut():
    pass

@router.delete("/{product_id}")
def delete_product():
    pass

