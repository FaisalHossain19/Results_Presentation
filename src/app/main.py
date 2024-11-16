from fastapi import FastAPI

from .core.database import Base, engine

from .routes import api_router

Base.metadata.create_all(bind=engine)

app = FastAPI()

app.include_router(api_router)


@app.get("/")
def read_root():
    return {"Hello": "World"}


@app.post("/users/register")
def register_user():
    pass


@app.post("/users/login")
def user_login():
    pass


@app.get("/users/me")
def user_read():
    pass


@app.post("users/verify-email/{verification_code}")
def verify_email():
    pass
