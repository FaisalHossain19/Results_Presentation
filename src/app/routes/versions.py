from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from ..crud import create_version, get_version_by_id, get_all_versions, delete_version
from ..schemas.versions import VersionCreate, VersionResponse
from ..core.database import get_db

router = APIRouter()

@router.post("/versions/", response_model=VersionResponse)
def create_version_route(version: VersionCreate, db: Session = Depends(get_db)):
    return create_version(db=db, version=version)

@router.get("/versions/{version_id}", response_model=VersionResponse)
def get_version_route(version_id: int, db: Session = Depends(get_db)):
    return get_version_by_id(db=db, version_id=version_id)

@router.get("/versions/", response_model=list[VersionResponse])
def get_all_versions_route(db: Session = Depends(get_db)):
    return get_all_versions(db=db)

@router.delete("/versions/{version_id}", response_model=VersionResponse)
def delete_version_route(version_id: int, db: Session = Depends(get_db)):
    return delete_version(db=db, version_id=version_id)
