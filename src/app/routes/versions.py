from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

import src.app.services.versions as versions_service
import src.app.services.user as user_service
from src.app.core.auth import decode_access_token, oauth2_scheme
from src.app.dependencies import get_db
from src.app.schemas.versions import VersionCreate, VersionResponse

router = APIRouter()


@router.post("/", response_model=VersionResponse)
def create_new_version(
    version: VersionCreate,
    db: Session = Depends(get_db),
):
    return versions_service.create_version(db, version)


@router.get("/", response_model=list[VersionResponse])
def read_versions(
    db: Session = Depends(get_db)
):
    return versions_service.get_versions(db)


@router.get("/{version_id}", response_model=VersionResponse)
def read_version(
    version_id: str,
    db: Session = Depends(get_db),
):
    version = versions_service.get_version_by_id(db, version_id)
    return version


@router.put("/{version_id}", response_model=VersionResponse)
def update_version_details(
    version_id: str,
    version: VersionCreate,
    db: Session = Depends(get_db),
):
    return versions_service.update_version_by_id(
        db, version_id, version
    )

@router.delete("/{version_id}")
def delete_version_route(
    version_id: int,
    db: Session = Depends(get_db)
):
    return versions_service.delete_version_by_id(db, version_id)