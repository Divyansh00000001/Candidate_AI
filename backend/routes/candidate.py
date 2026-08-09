from fastapi import APIRouter
from services.candidate import load_candidate

router = APIRouter()


@router.get("/candidate")
def get_candidate():

    candidate = load_candidate()

    return candidate