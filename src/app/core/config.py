from functools import lru_cache
from dotenv import load_dotenv
from pydantic_settings import BaseSettings, SettingsConfigDict

load_dotenv()

class Settings(BaseSettings):
    SQLALCHEMY_DATABASE_URL: str
    SECRET_KEY: str
    JWT_SECRET_KEY: str  # Add this line
    ALGORITHM: str  # Add this line
    ACCESS_TOKEN_EXPIRE_MINUTES: int  # Add this line

    model_config = SettingsConfigDict(env_file=".env", env_file_encoding="utf-8")


@lru_cache
def get_settings() -> Settings:
    return Settings()


settings = get_settings()

# Print to check if everything is loaded correctly
# print(settings.SQLALCHEMY_DATABASE_URL)
