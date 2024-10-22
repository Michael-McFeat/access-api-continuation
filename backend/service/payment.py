from uuid import uuid4
from datetime import datetime
from service.schema import InstructionData
from fastapi import HTTPException
import requests
import base64

class PaymentService:
    basic_auth_username = "ES2QENxeZd2rsfbt"
    basic_auth_password = "Xz6s4BxtI533rmAVPA4oQ1IMlddUphe0ii8v6Im4gsjzygexAzqjj8nkcYbvJkOi"
    url = "https://try.access.worldpay.com/api/payments"

    @staticmethod
    def generate_transaction_reference(prefix="Memory"):
        unique_id = uuid4().hex[:8]
        timestamp = datetime.now().strftime("%d/%m/%Y")
        return f"{prefix}{unique_id}-{timestamp}"

    @staticmethod
    async def make_payment(instructionData: InstructionData):
        _transactionReference = PaymentService.generate_transaction_reference()
        #_transactionReference = "Memory265-13/08/1876"
        _entity = "default"
        payload = {
            "transactionReference": _transactionReference,
            "merchant": {"entity": _entity},
            "instruction": instructionData.dict()
        }

        headers = {
            "Content-Type": "application/json",
            "WP-Api-Version": "2024-06-01"
        }

        response = requests.post(PaymentService.url, json=payload, headers=headers, auth=(PaymentService.basic_auth_username,PaymentService.basic_auth_password))

        data = response.json()
        print(data)

        if response.status_code != 200:
            raise HTTPException(status_code=response.status_code, detail=response.text)

        try:
            return response.json()
        except requests.exceptions.JSONDecodeError:
            raise HTTPException(status_code=500, detail="Invalid JSON response from Worldpay API")

