import json
from pathlib import Path

# Path to candidate.json
CANDIDATE_PATH = Path(__file__).parent.parent / "data" / "candidate.json"


def load_candidate():
    """
    Load and return the candidate profile.
    """
    try:
        with open(CANDIDATE_PATH, "r", encoding="utf-8") as file:
            return json.load(file)

    except FileNotFoundError:
        raise FileNotFoundError(
            f"candidate.json not found at {CANDIDATE_PATH}"
        )

    except json.JSONDecodeError as e:
        raise ValueError(
            f"Invalid JSON in candidate.json\n{e}"
        )