from datetime import UTC, datetime, timedelta

import jwt
from fastapi import HTTPException, status
from fastapi.security import OAuth2PasswordBearer
from jwt.exceptions import InvalidTokenError
from passlib.context import CryptContext

from src.app.core.config import get_settings
from src.app.schemas.token import TokenData

settings = get_settings()

SECRET_KEY = settings.SECRET_KEY
ALGORITHM = "HS256"
ACCESS_TOKEN_EXPIRE_MINUTES = 30

oauth2_scheme = OAuth2PasswordBearer(tokenUrl="users/token")

pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")


def get_password_hash(password: str):
    return pwd_context.hash(password)


def create_access_token(data: dict, expires_delta: timedelta | None = None):
    to_encode = data.copy()
    expire = datetime.now(UTC) + (
        expires_delta if expires_delta else timedelta(minutes=15)
    )

    to_encode.update({"exp": expire})
    return jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)


def decode_access_token(token: str) -> TokenData:
    try:
        payload = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
        username: str = payload.get("sub")
        if username is None:
            raise HTTPException(
                status_code=status.HTTP_401_UNAUTHORIZED, detail="Token invalid"
            )
        return TokenData(username=username)
    except InvalidTokenError:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED, detail="Token invalid"
        ) from None