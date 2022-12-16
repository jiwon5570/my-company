from sqlalchemy.ext.declarative import declarative_base 
from sqlalchemy import Column, String, Integer, event, Float, Boolean
from datetime import datetime

import util

Base = declarative_base()

class Main(Base):
    __tablename__ = 'Main_table'
    id = Column(Integer, primary_key=True)
    presentation = Column()
    businessLogic = Column()

    def __init__(self):
        self.id = None
        self.presentation = None
        self.businessLogic = None


