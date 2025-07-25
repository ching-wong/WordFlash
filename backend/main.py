from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import json
from pathlib import Path

app = FastAPI()

origins = [
    "http://localhost:5173",
    "https://word-flash-dun.vercel.app"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

data_file = Path(__file__).parent / "data" / "all_words.json"

with open(data_file, "r") as f:
    quiz_data = json.load(f)

@app.get("/words/{length}")
def get_words(length: int):
    words = quiz_data.get(str(length))
    if words:
        return {"length": length, "words": words}

@app.get("/ping")
def ping():
    return {"ping": "pong"}