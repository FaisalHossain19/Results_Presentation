from fastapi import HTTPException
from sqlalchemy.orm import Session

from src.app.models.versions import Version
from src.app.schemas.versions import VersionBase, VersionCreate


def get_versions(db: Session):
    return db.query(Version).all()


def get_version_by_id(db: Session, version_id: str):
    version = db.query(Version).filter(Version.version_id == version_id).first()
    if version is None:
        raise HTTPException(status_code=404, detail="Version not found")
    return version


def create_version(db: Session, version: VersionCreate):
    db_versions = Version(
        version_id = version.version_id
    )
    print(db_versions)
    if db_versions is None:
        return None
    db.add(db_versions)
    db.commit()
    db.refresh(db_versions)
    return db_versions


# def get_version_by_id(db: Session, version_id: int, user_id: int):
#     return (
#         db.query(Version)
#         .filter(Version.id == version_id, Version.version_id == version_id)
#         .first()
#     )


# def update_version(
#     db: Session, version_id: str, version: VersionBase
# ):
#     db_version = get_version_by_id(db, version_id)
#     if version is None:
#         return None
#     for key, value in version.model_dump().items():
#         setattr(db_version, key, value)
#     db.commit()
#     db.refresh(db_version)
#     return db_version

def update_version_by_id(
    db: Session, version_id: str, version: VersionBase
):
    db_version = get_version_by_id(db, version_id)
    if version is None:
        return None
    for key, value in version.model_dump().items():
        setattr(db_version, key, value)
    db.commit()
    db.refresh(db_version)
    return db_version

def delete_version_by_id(db: Session, version_id: int):
    db.query(Version).filter(
        Version.id == version_id
    ).delete()
    db.commit()
    return True
