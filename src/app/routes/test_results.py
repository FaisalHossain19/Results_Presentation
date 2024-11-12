from fastapi import APIRouter
router = APIRouter()

router.get("/")
def get_test_results():
    pass

@router.post("/{test_id}")
def post_test_result():
    pass

@router.get("/{test_id}")
def get_test_result():
    pass

@router.put("/{test_id}")
def put_test_result():
    pass

@router.delete("/{test_id}")
def delete_test_result():
    pass