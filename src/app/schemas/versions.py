from pydantic import BaseModel


class VersionBase(BaseModel):
    version_id: str


class VersionCreate(VersionBase):
    pass


class VersionResponse(VersionBase):
    id: int

    class Config:
        orm_mode = True
