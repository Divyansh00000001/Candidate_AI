import { useEffect, useState } from "react";
import { streamQuestion } from "../services/api";
import Sidebar from "../components/Sidebar";
import ChatArea from "../components/ChatArea";
import { getCandidate } from "../services/api";
import InterviewPanel from "../components/InterviewPanel";

export default function Home() {

    const [question, setQuestion] = useState("");
    const [messages, setMessages] = useState([]);
    const [loading, setLoading] = useState(false);
    const [view, setView] = useState("chat");
    const [candidate, setCandidate] = useState(null);
    const [error, setError] = useState("");

    const [conversations, setConversations] = useState(() => {

        const saved = localStorage.getItem("candidate-ai-conversations");

        return saved ? JSON.parse(saved) : [];

    });

    const [currentConversationId, setCurrentConversationId] =
        useState(null);


    // Save conversations whenever they change
    useEffect(() => {

        localStorage.setItem(
            "candidate-ai-conversations",
            JSON.stringify(conversations)
        );

    }, [conversations]);

    useEffect(() => {

    getCandidate()
        .then((data) => {
            console.log("Candidate loaded:", data);
            setCandidate(data);
        })
        .catch((error) => {
            console.error("Failed to load candidate:", error);
        });

}, []);


    const sendQuestion = async (text) => {

        if (!text.trim() || loading) return;

        const formattedQuestion =
            text.charAt(0).toUpperCase() + text.slice(1);

    const lowerQuestion = formattedQuestion.toLowerCase();

const isProjectQuestion =
    lowerQuestion.includes("project");

const isSkillsQuestion =
    lowerQuestion.includes("skill") ||
    lowerQuestion.includes("technical skill") ||
    lowerQuestion.includes("tech stack");

const userMessage = {
    role: "user",
    content: formattedQuestion,
    isProjectQuestion,
    isSkillsQuestion,
};


        setMessages((prev) => [...prev, userMessage]);

        setQuestion("");
        setLoading(true);


        // Create a new conversation if this is the first message
        let conversationId = currentConversationId;

        if (!conversationId) {

            conversationId = Date.now().toString();

            setCurrentConversationId(conversationId);

            const newConversation = {
                id: conversationId,
                title: formattedQuestion,
                messages: [userMessage],
            };

            setConversations((prev) => [
                ...prev,
                newConversation,
            ]);

        }


        const aiMessage = {
            role: "assistant",
            content: "",
            isProjectQuestion,
            isSkillsQuestion,
        };


        setMessages((prev) => [...prev, aiMessage]);


        try {

    setError("");

    await streamQuestion(
        formattedQuestion,
        (chunk) => {

            setMessages((prev) => {

                const updated = [...prev];

                const lastIndex = updated.length - 1;

                updated[lastIndex] = {
                    ...updated[lastIndex],
                    content:
                        updated[lastIndex].content + chunk,
                };

                return updated;

            });

        }
    );


    // Save the completed conversation
    setMessages((prev) => {

        setConversations((conversations) =>
            conversations.map((conversation) => {

                if (conversation.id !== conversationId) {
                    return conversation;
                }

                return {
                    ...conversation,
                    messages: prev,
                };

            })
        );

        return prev;

    });


} catch (error) {

    console.error("Chat error:", error);

    setError(
        "Unable to connect to Candidate AI. Please try again."
    );

} finally {

    setLoading(false);

}
    };


    const handleSuggestion = (suggestion) => {
        sendQuestion(suggestion);
    };


    const handleSend = () => {
        sendQuestion(question);
    };


    // Start a completely new conversation
    const handleNewChat = () => {

        if (loading) return;
        setView("chat");
        setMessages([]);
        setQuestion("");
        setError("");
        setCurrentConversationId(null);

    };


    // Load an old conversation
    const handleSelectConversation = (conversationId) => {

    if (loading) return;

    const conversation = conversations.find(
        (item) => item.id === conversationId
    );

    if (!conversation) {
        console.error(
            "Conversation not found:",
            conversationId
        );
        return;
    }

    setView("chat");

    setCurrentConversationId(conversation.id);

    setMessages(conversation.messages || []);

    setQuestion("");

};

    const handleDeleteConversation = (id) => {

    setConversations((prev) =>
        prev.filter((conversation) => conversation.id !== id)
    );

    if (currentConversationId === id) {

        setCurrentConversationId(null);

        setMessages([]);

    }

};


    return (

        <div className="h-screen flex bg-gray-100">

            <Sidebar
                conversations={conversations}
                currentConversationId={currentConversationId}
                onNewChat={handleNewChat}
                onSelectConversation={handleSelectConversation}
                onResume={() => setView("resume")}
                onInterview={() => setView("interview")}
                onJobMatch={() => setView("job-match")}
                onWhyHire={() => setView("why-hire")}
                onDeleteConversation={handleDeleteConversation}
            />


            <ChatArea
                messages={messages}
                loading={loading}
                question={question}
                setQuestion={setQuestion}
                handleSend={handleSend}
                onSuggestionClick={handleSuggestion}
                view={view}
                candidate={candidate}
                error={error}
            />

        </div>

    );

}