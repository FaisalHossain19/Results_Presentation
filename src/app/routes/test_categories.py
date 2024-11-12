from fastapi import APIRouter
router = APIRouter()

router.get("/")
def get_test_categories():
    pass

@router.post("/{category_id}")
def post_test_category():
    pass

@router.get("/{category_id}")
def get_test_category():
    pass

@router.put("/{category_id}")
def put_test_category():
    pass

@router.delete("/{category_id}")
def delete_test_category():
    pass

