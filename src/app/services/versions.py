from sqlalchemy.orm import Session

from src.app.models.versions import Version
from src.app.schemas.versions import VersionBase, VersionCreate


def get_versions(db: Session, version_id: int):
    return db.query(Version).filter(Version.version_id == version_id).all()


def get_version_by_version_id(db: Session, version_id: int):
    return db.query(Version).filter(Version.version_id == version_id)


def create_versions(db: Session, version: VersionCreate, version_id: int):
    db_versions = Version(
        version_name=Version.version_name,
        version_type=Version.version_type,
        version_id=version_id,
    )
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


def update_version_by_id(
    db: Session, version_id: int, version: VersionBase, test_result_id: int
):
    db_version = get_version_by_version_id(db, version_id, test_result_id)
    if version is None:
        return None
    for key, value in version.model_dump().items():
        setattr(db_version, key, value)
    db.commit()
    db.refresh(db_version)
    return db_version

def update_version_by_version_id(
    db: Session, version_id: int, version: VersionBase
):
    db_version = get_version_by_version_id(db, version_id)
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