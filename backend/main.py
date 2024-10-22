import uvicorn
from fastapi import FastAPI, APIRouter
from fastapi.middleware.cors import CORSMiddleware

origins = [
    "http://localhost:3000"
]

def init_app():
    app = FastAPI(
        title="App",
        description="Backend",
        version="1"
    )
    app.add_middleware(
        CORSMiddleware,
        allow_origins=origins,
        allow_credentials=True,
        allow_methods=["*"],
        allow_headers=["*"]
    )

    from util import worldpay
    app.include_router(worldpay.router)
    return app

app = init_app()

def start():
    uvicorn.run("main:app", host="localhost", port=8000, reload=True)

if __name__ == "__main__":
    start()
