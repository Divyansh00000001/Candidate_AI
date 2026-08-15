const API_URL =
    import.meta.env.VITE_API_URL || "http://localhost:8000";


export async function askQuestion(question) {

    const response = await fetch(`${API_URL}/chat`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            question,
        }),
    });

    if (!response.ok) {
        throw new Error("Failed to fetch response.");
    }

    return response.json();
}


export async function streamQuestion(question, onChunk) {

    const response = await fetch(`${API_URL}/chat/stream`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            question,
        }),
    });

    if (!response.ok) {
        throw new Error("Failed to connect to streaming endpoint.");
    }

    if (!response.body) {
        throw new Error("Streaming is not supported by this browser.");
    }

    const reader = response.body.getReader();
    const decoder = new TextDecoder();

    while (true) {

        const { value, done } = await reader.read();

        if (done) {
            break;
        }

        const chunk = decoder.decode(value, {
            stream: true,
        });

        if (!chunk) continue;

        onChunk(chunk);
    }
}


export async function getCandidate() {

    const response = await fetch(
        `${API_URL}/candidate`
    );

    if (!response.ok) {
        throw new Error("Failed to load candidate data.");
    }

    return response.json();
}


export async function analyzeJobMatch(jobDescription) {

    const response = await fetch(
        `${API_URL}/job-match`,
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                job_description: jobDescription,
            }),
        }
    );

    if (!response.ok) {
        throw new Error("Failed to analyze job match.");
    }

    return response.json();
}