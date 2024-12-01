# from sqlalchemy.orm import Session
# from src.app.models.products import Product
# from src.app.models.test_categories import TestCategory
# from src.app.models.test_results import TestResult
# from src.app.models.user import User
# from src.app.models.versions import Version

# from src.app.schemas.products import ProductCreate, ProductResponse
# from src.app.schemas.test_categories import TestCategoryCreate, TestCategoryResponse
# from src.app.schemas.test_results import TestResultCreate, TestResultResponse
# from src.app.schemas.user import UserCreate, UserResponse
# from src.app.schemas.versions import VersionCreate, VersionResponse


# # Product CRUD
# def create_product(db: Session, product: ProductCreate) -> ProductResponse:
#     db_product = Product(**product.dict())
#     db.add(db_product)
#     db.commit()
#     db.refresh(db_product)
#     return ProductResponse.from_orm(db_product)


# def get_product_by_id(db: Session, product_id: int) -> ProductResponse | None:
#     db_product = db.query(Product).filter(Product.id == product_id).first()
#     return ProductResponse.from_orm(db_product) if db_product else None


# def get_all_products(db: Session) -> list[ProductResponse]:
#     products = db.query(Product).all()
#     return [ProductResponse.from_orm(product) for product in products]


# def delete_product(db: Session, product_id: int) -> ProductResponse | None:
#     db_product = get_product_by_id(db, product_id)
#     if db_product:
#         db.delete(db_product)
#         db.commit()
#         return db_product
#     return None


# # TestCategory CRUD
# # def create_test_category(db: Session, category: TestCategoryCreate) -> TestCategoryResponse:
# #     db_category = TestCategory(**category.dict())
# #     db.add(db_category)
# #     db.commit()
# #     db.refresh(db_category)
# #     return TestCategoryResponse.from_orm(db_category)


# def get_test_category_by_id(db: Session, category_id: int) -> TestCategoryResponse | None:
#     db_category = db.query(TestCategory).filter(TestCategory.id == category_id).first()
#     return TestCategoryResponse.from_orm(db_category) if db_category else None


# def get_all_test_categories(db: Session) -> list[TestCategoryResponse]:
#     categories = db.query(TestCategory).all()
#     return [TestCategoryResponse.from_orm(category) for category in categories]


# def delete_test_category(db: Session, category_id: int) -> TestCategoryResponse | None:
#     db_category = get_test_category_by_id(db, category_id)
#     if db_category:
#         db.delete(db_category)
#         db.commit()
#         return db_category
#     return None


# # TestResult CRUD
# def create_test_result(db: Session, result: TestResultCreate) -> TestResultResponse:
#     db_result = TestResult(**result.dict())
#     db.add(db_result)
#     db.commit()
#     db.refresh(db_result)
#     return TestResultResponse.from_orm(db_result)


# def get_test_result_by_id(db: Session, result_id: int) -> TestResultResponse | None:
#     db_result = db.query(TestResult).filter(TestResult.id == result_id).first()
#     return TestResultResponse.from_orm(db_result) if db_result else None


# def get_all_test_results(db: Session) -> list[TestResultResponse]:
#     results = db.query(TestResult).all()
#     return [TestResultResponse.from_orm(result) for result in results]


# def delete_test_result(db: Session, result_id: int) -> TestResultResponse | None:
#     db_result = get_test_result_by_id(db, result_id)
#     if db_result:
#         db.delete(db_result)
#         db.commit()
#         return db_result
#     return None


# # User CRUD
# def create_user(db: Session, user: UserCreate) -> UserResponse:
#     db_user = User(**user.dict(exclude={"password"}))
#     db_user.password_hash = user.password  # Assume password hashing is handled here
#     db.add(db_user)
#     db.commit()
#     db.refresh(db_user)
#     return UserResponse.from_orm(db_user)


# def get_user_by_id(db: Session, user_id: int) -> UserResponse | None:
#     db_user = db.query(User).filter(User.id == user_id).first()
#     return UserResponse.from_orm(db_user) if db_user else None


# def get_user_by_email(db: Session, email: str) -> UserResponse | None:
#     db_user = db.query(User).filter(User.email == email).first()
#     return UserResponse.from_orm(db_user) if db_user else None


# def get_all_users(db: Session) -> list[UserResponse]:
#     users = db.query(User).all()
#     return [UserResponse.from_orm(user) for user in users]


# def delete_user(db: Session, user_id: int) -> UserResponse | None:
#     db_user = get_user_by_id(db, user_id)
#     if db_user:
#         db.delete(db_user)
#         db.commit()
#         return db_user
#     return None


# # Version CRUD
# def create_version(db: Session, version: VersionCreate) -> VersionResponse:
#     db_version = Version(**version.dict())
#     db.add(db_version)
#     db.commit()
#     db.refresh(db_version)
#     return VersionResponse.from_orm(db_version)


# def get_version_by_id(db: Session, version_id: int) -> VersionResponse | None:
#     db_version = db.query(Version).filter(Version.id == version_id).first()
#     return VersionResponse.from_orm(db_version) if db_version else None


# def get_all_versions(db: Session) -> list[VersionResponse]:
#     versions = db.query(Version).all()
#     return [VersionResponse.from_orm(version) for version in versions]


# def delete_version(db: Session, version_id: int) -> VersionResponse | None:
#     db_version = get_version_by_id(db, version_id)
#     if db_version:
#         db.delete(db_version)
#         db.commit()
#         return db_version
#     return None
