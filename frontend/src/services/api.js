const API_URL =
    import.meta.env.VITE_API_URL || "http://localhost:8000";
    
export async function askQuestion(question) {
    const response = await fetch(`${BASE_URL}/chat`, {
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
    const response = await fetch("http://127.0.0.1:8000/chat/stream", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            question: question,
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

        // Display the chunk character by character
        for (const character of chunk) {

            onChunk(character);

            await new Promise((resolve) =>
                setTimeout(resolve, 20)
            );
        }
    }
}

export async function getCandidate() {

    const response = await fetch(
        "http://127.0.0.1:8000/candidate"
    );

    if (!response.ok) {
        throw new Error("Failed to load candidate data.");
    }

    return await response.json();
}

export async function analyzeJobMatch(jobDescription) {

    const response = await fetch(
        "http://127.0.0.1:8000/job-match",
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

    return await response.json();
}