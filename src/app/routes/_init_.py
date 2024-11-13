from app.routes import user, test_categories, products, test_results, versions
from fastapi import APIRouter

api_router = APIRouter()

# Including routers with consistent prefixes and tags
api_router.include_router(user.router, prefix="/users", tags=["Users"])
api_router.include_router(test_categories.router, prefix="/test-categories", tags=["Test Categories"])
api_router.include_router(products.router, prefix="/products", tags=["Products"])
api_router.include_router(test_results.router, prefix="/test-results", tags=["Test Results"])
api_router.include_router(versions.router, prefix="/versions", tags=["Versions"])
