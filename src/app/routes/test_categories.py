from fastapi import APIRouter
router = APIRouter()

router.get("/")
def get_test_categories():
    pass

@router.post("/test_category/{category_id}")
def post_test_category():
    pass

@router.get("/test_category/{category_id}")
def get_test_category():
    pass

@router.put("/test_category/{category_id}")
def put_test_category():
    pass

@router.delete("/test_category/{category_id}")
def delete_test_category():
    pass

