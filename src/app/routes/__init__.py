from fastapi import APIRouter

from src.app.routes import products, test_categories, test_results, user, versions

api_router = APIRouter()

api_router.include_router(user.router, prefix="/users", tags=["Users"])
api_router.include_router(products.router, prefix="/products", tags=["Products"])
api_router.include_router(
    test_categories.router, prefix="/test_categories", tags=["Test Categories"]
    )
api_router.include_router(
    test_results.router, prefix="/test_results", tags=["Test Results"]

    )
api_router.include_router(
    versions.router, prefix="/versions", tags=["Versions"]

    )
