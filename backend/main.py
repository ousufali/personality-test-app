import uvicorn
from fastapi import FastAPI

from config import HOST, PORT
from routers import assessments
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()
app.include_router(assessments.exam_router)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
def hello():
    return "Hello, World!"


@app.get("/health-check")
def health_check():
    return "K.O"


# if __name__ == "__main__":
#     uvicorn.run(app, host=HOST, port=PORT)

# uvicorn main:app --host 0.0.0.0 --port 5050 --reload 