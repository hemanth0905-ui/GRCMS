from sqlalchemy import Column
from sqlalchemy import Integer
from sqlalchemy import String
from sqlalchemy import Text
from sqlalchemy import Date
from sqlalchemy import DateTime
from datetime import datetime

from app.db.database import Base

class Rule(Base):
    __tablename__ = "rules"

    id = Column(Integer, primary_key=True)

    title = Column(String)

    description = Column(Text)

    department = Column(String)

    priority = Column(String)

    deadline = Column(Date)

    attachment = Column(String)

    created_by = Column(Integer)

    created_at = Column(
        DateTime,
        default=datetime.utcnow
    )