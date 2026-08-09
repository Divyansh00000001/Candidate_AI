import json

from fastapi import APIRouter

from models.chat import JobMatchRequest, JobMatchResponse
from services.candidate import load_candidate
from services.llm import analyze_job_match


router = APIRouter()


@router.post("/job-match", response_model=JobMatchResponse)
def job_match(request: JobMatchRequest):

    candidate = load_candidate()

    result = analyze_job_match(
        candidate,
        request.job_description
    )

    return JobMatchResponse(
        match_score=result["match_score"],
        matching_skills=result["matching_skills"],
        missing_skills=result["missing_skills"],
        recommendation=result["recommendation"]
    )