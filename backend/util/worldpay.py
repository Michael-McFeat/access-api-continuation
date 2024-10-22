from fastapi import HTTPException
from fastapi.responses import JSONResponse
import os
from fastapi import APIRouter, Request, Depends
from service.schema import InstructionData
from service.payment import PaymentService

router = APIRouter(
    prefix="/worldpay",
    tags=['Worldpay']
)
@router.post("/payments")
async def payment(req: Request, payload: InstructionData):
    try:
        payment_response = await PaymentService.make_payment(payload)
        return JSONResponse(content={"message": "Payment processed", "data": payment_response})
    except HTTPException as e:
        return JSONResponse(status_code=e.status_code, content={"message": e.detail})




