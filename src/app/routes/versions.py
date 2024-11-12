from fastapi import APIRouter
router = APIRouter()

router.get("/")
def get_versions():
    pass

@router.post("/{version_id}")
def post_version():
    pass

@router.get("/{version_id}")
def get_version():
    pass

@router.put("/{version_id}")
def put_version():
    pass

@router.delete("/{version_id}")
def delete_version():
    pass