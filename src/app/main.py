from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from src.app.core.database import Base, engine
from src.app.routes import api_router

# Initialize the database
Base.metadata.create_all(bind=engine)

# Initialize the FastAPI app
app = FastAPI()

# Add CORS Middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Frontend origin
    allow_credentials=True,
    allow_methods=["*"],  # Allow all HTTP methods
    allow_headers=["*"],  # Allow all headers
)

# Include your API router
app.include_router(api_router)


# Root endpoint
@app.get("/")
def read_root():
    return {"Hello": "World"}


# @app.post("/users/register")
# def register_user():
#     pass


# @app.post("/users/login")
# def user_login():
#     pass


# @app.get("/users/me")
# def user_read():
#     pass


# @app.post("users/verify-email/{verification_code}")
# def verify_email():
#     pass
