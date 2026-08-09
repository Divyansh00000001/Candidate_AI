import os
import json

from dotenv import load_dotenv
from groq import Groq

from services.candidate import load_candidate
from services.prompt import SYSTEM_PROMPT


load_dotenv()

my_api_key = os.getenv("GROQ_API_KEY")

if not my_api_key:
    raise ValueError("GROQ_API_KEY environment variable is not set.")

client = Groq(api_key=my_api_key)

model = "llama-3.3-70b-versatile"


def build_messages(question: str):

    candidate = load_candidate()

    prompt = f"""
Candidate Profile:

{json.dumps(candidate, indent=2)}

Question:
{question}
"""

    system_prompt = {
        "role": "system",
        "content": SYSTEM_PROMPT
    }

    user_prompt = {
        "role": "user",
        "content": prompt
    }

    return [system_prompt, user_prompt]


def generate_response(question: str):

    messages = build_messages(question)

    response = client.chat.completions.create(
        model=model,
        messages=messages
    )

    return response.choices[0].message.content


def chat_stream(question: str):

    messages = build_messages(question)

    response = client.chat.completions.create(
        model=model,
        messages=messages,
        stream=True
    )

    for chunk in response:

        content = chunk.choices[0].delta.content

        if content:
            yield content

def analyze_job_match(candidate, job_description):

    prompt = f"""
You are analyzing a candidate against a job description.

Candidate Profile:
{json.dumps(candidate, indent=2)}

Job Description:
{job_description}

Return ONLY valid JSON in exactly this format:

{{
    "match_score": 0,
    "matching_skills": [],
    "missing_skills": [],
    "recommendation": ""
}}

Rules:

- match_score must be an integer from 0 to 100.
- matching_skills must contain skills the candidate has that are relevant to the job.
- missing_skills must contain important skills required by the job that are not present in the candidate profile.
- recommendation should briefly explain whether the candidate is a strong, moderate, or weak match.
- Do not add markdown.
- Do not add ```json.
"""

    response = client.chat.completions.create(
        model=model,
        messages=[
            {
                "role": "system",
                "content": "You are a precise job matching assistant. Return only valid JSON."
            },
            {
                "role": "user",
                "content": prompt
            }
        ],
        temperature=0
    )

    content = response.choices[0].message.content

    return json.loads(content)        