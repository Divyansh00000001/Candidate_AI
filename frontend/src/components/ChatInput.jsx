import { useRef, useEffect } from "react";

export default function ChatInput({
    question,
    setQuestion,
    handleSend,
    loading
}) {

    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current?.focus();
    }, [loading]);

    return (
        <div className="px-6 pb-6 pt-3">

            <div className="max-w-3xl mx-auto">

                <div className="relative bg-white border border-gray-300 rounded-2xl shadow-sm focus-within:border-gray-400 focus-within:shadow-md transition">

                    <textarea
                        ref={inputRef}
                        value={question}
                        disabled={loading}
                        onChange={(e) => {
    const value = e.target.value;

    setQuestion(
        value.length > 0
            ? value.charAt(0).toUpperCase() + value.slice(1)
            : ""
    );
}}
                        onKeyDown={(e) => {

                            if (e.key === "Enter" && !e.shiftKey) {
                                e.preventDefault();
                                handleSend();
                            }

                        }}
                        placeholder="Ask anything about Divyansh..."
                        rows={1}
                        className="w-full resize-none bg-transparent text-gray-900 placeholder-gray-400 outline-none px-5 pt-4 pb-14"
                    />

                    <div className="absolute bottom-3 left-4 text-xs text-gray-400">
                        Enter to send · Shift + Enter for new line
                    </div>

                    <button
                        onClick={handleSend}
                        disabled={loading || !question.trim()}
                        className={`absolute bottom-3 right-3 w-9 h-9 rounded-xl flex items-center justify-center transition ${
                            loading || !question.trim()
                                ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                                : "bg-gray-900 text-white hover:bg-gray-700"
                        }`}
                    >
                        ↑
                    </button>

                </div>

                <p className="text-center text-xs text-gray-400 mt-2">
                    Candidate AI can make mistakes. Verify important information.
                </p>

            </div>

        </div>
    );
}