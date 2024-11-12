from fastapi import APIRouter
router = APIRouter()

@router.get("/")
def read_root():
    pass

@router.post("/register")
def register_user():
    pass

@router.post("/login")
def user_login():
    pass

@router.get("/{id}")
def user_read():
    pass

@router.post("/verify-email/{verification_code}")
def verify_email():
    pass

@router.post("/logout")
def user_logout():
    pass

@router.delete("/{id}")
def user_logout():
    pass
