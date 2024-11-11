from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from sqlalchemy.ext.declarative import declarative_base

SQLITE_FILE_NAME= "database.db"
SQLALCHEMY_DATABASE_URL= f"sqlite:///{SQLITE_FILE_NAME}"

#TO DO: Change this to environment variable

engine = create_engine(SQLALCHEMY_DATABASE_URL, connect_args={"check_same_thread": False})

SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

Base = declarative_base()
