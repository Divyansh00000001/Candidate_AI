from pydantic import BaseModel


class ChatRequest(BaseModel):
    question: str


class ChatResponse(BaseModel):
    answer: str

class JobMatchRequest(BaseModel):
    job_description: str


class JobMatchResponse(BaseModel):
    match_score: int
    matching_skills: list[str]
    missing_skills: list[str]
    recommendation: str