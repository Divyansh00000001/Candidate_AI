from fastapi import APIRouter
from fastapi.responses import StreamingResponse

from models.chat import ChatRequest, ChatResponse
from services.llm import generate_response, chat_stream


router = APIRouter()


@router.post("/chat", response_model=ChatResponse)
def chat_with_candidate(request: ChatRequest):

    answer = generate_response(request.question)

    return ChatResponse(
        answer=answer
    )


@router.post("/chat/stream")
def chat_with_candidate_stream(request: ChatRequest):

    return StreamingResponse(
        chat_stream(request.question),
        media_type="text/plain"
    )