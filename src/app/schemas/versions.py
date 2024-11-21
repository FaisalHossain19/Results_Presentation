from pydantic import BaseModel


class VersionBase(BaseModel):
    version_id: str


class VersionCreate(VersionBase):
    version_id: str


class VersionResponse(VersionBase):
    id: int
    version_id: str
    class Config:
        orm_mode = True
