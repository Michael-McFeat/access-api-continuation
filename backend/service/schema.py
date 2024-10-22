from datetime import datetime

from fastapi import HTTPException
import logging
import re
from typing import TypeVar, Optional, List

from pydantic import BaseModel, validator, ValidationError, Field, HttpUrl

T = TypeVar('T')

# get root logger
logger = logging.getLogger(__name__)

class MerchantInfo(BaseModel):
    entity: str = Field("default", example="default")

class BillingAddress(BaseModel):
    address1: str = Field(None, example="221B Baker Street")
    address2: str = Field(None, example="Marylebone")
    address3: str = Field(None, example="Westminster")
    postalCode: str = Field(None, example="NW1 6XE")
    city: str = Field(None, example="London")
    state: str = Field(None, example="Greater London")
    countryCode: str = Field(None, example="GB")

class ExpiryDate (BaseModel):
    month: int = Field(None, example=5)
    year: int = Field(None, example=2035)

class PaymentInstrument(BaseModel):
    type: str = Field(None, example="plain")
    cardHolderName: str = Field(None, example="Sherlock Holmes")
    cardNumber: str = Field(None, example="4000000000001091")
    expiryDate: ExpiryDate
    billingAddress: BillingAddress
    cvc: str = Field(None, example="123")

class Narrative(BaseModel):
    line1: str = Field(None, example="trading name")

class Value(BaseModel):
    currency: str = Field(None, example="GBP")
    amount: int = Field(None, example=42)

class InstructionData(BaseModel):
    method: str = Field(None, example="card")
    paymentInstrument: PaymentInstrument
    narrative: Narrative
    value: Value

class Instruction(BaseModel):
    transactionReference: str = Field(None, example="Memory265-13/08/1876")
    merchant: MerchantInfo
    instruction: InstructionData