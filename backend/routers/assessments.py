from fastapi import APIRouter

from db import assessments
from utils import calculate_score

exam_router = APIRouter(prefix="/api/exam", tags=["exam"])


@exam_router.get("/get/assessments")
def get_assessments():
    results = []
    try:
        for item in assessments:
            results.append(
                {
                    "title": item.get("title"),
                    "shortDescription": item.get("shortDescription"),
                    "description": item.get("description"),
                }
            )
    except Exception as err:
        print("err: ", err)

    return results


# /get/questions
@exam_router.post("/get/questions")
def get_questions(data: dict):
    results = []
    try:
        test_index = data.get("assessmentNumber")
        results = assessments[test_index].get("questions")
    except Exception as err:
        print("err: ", err)
    return results


# /get/score
@exam_router.post("/get/score")
def get_score(data: dict):
    try:
        if "assessmentNumber" not in data or "answerSheet" not in data:
            return "Invalid data", 422
        print(data)
        return calculate_score(data)
    except Exception as err:
        print("err: ", err)
        return "Server error", 500
