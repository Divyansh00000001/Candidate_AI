export default function Welcome({ onSuggestionClick }) {

    const suggestions = [
        {
            title: "Tell me about yourself",
            description: "Get a quick introduction",
        },
        {
            title: "What are your technical skills?",
            description: "Explore the candidate's tech stack",
        },
        {
            title: "Tell me about your projects",
            description: "Explore projects and experience",
        },
        {
            title: "Why should we hire you?",
            description: "Understand the candidate's strengths",
        },
    ];

    return (
        <div className="flex-1 flex items-center justify-center px-6">

            <div className="w-full max-w-3xl">

                {/* Greeting */}

                <div className="text-center mb-10">

                    <div className="mx-auto mb-5 w-14 h-14 rounded-2xl bg-emerald-500 flex items-center justify-center text-white text-xl font-bold shadow-sm">
                        D
                    </div>

                    <h1 className="text-4xl font-semibold text-gray-900">
                        How can I help you?
                    </h1>

                    <p className="mt-3 text-gray-500">
                        Ask anything about Divyansh Chauhan
                    </p>

                </div>


                {/* Suggestions */}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">

                    {suggestions.map((suggestion) => (

                        <button
                            key={suggestion.title}
                            onClick={() =>
                                onSuggestionClick(suggestion.title)
                            }
                            className="text-left bg-white border border-gray-200 rounded-xl p-4 hover:border-gray-300 hover:shadow-sm transition group"
                        >

                            <div className="flex items-start justify-between gap-4">

                                <div>

                                    <p className="font-medium text-gray-800">
                                        {suggestion.title}
                                    </p>

                                    <p className="text-sm text-gray-400 mt-1">
                                        {suggestion.description}
                                    </p>

                                </div>

                                <span className="text-gray-300 group-hover:text-gray-600">
                                    ↗
                                </span>

                            </div>

                        </button>

                    ))}

                </div>

            </div>

        </div>
    );
}