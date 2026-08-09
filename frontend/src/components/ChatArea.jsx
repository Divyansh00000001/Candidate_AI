import ChatWindow from "./ChatWindow";
import ChatInput from "./ChatInput";
import Welcome from "./Welcome";
import InterviewPanel from "./InterviewPanel";
import JobMatchPanel from "./JobMatchPanel";
import WhyHirePanel from "./WhyHirePanel";

export default function ChatArea({
    messages = [],
    loading,
    error,
    question,
    setQuestion,
    handleSend,
    onSuggestionClick,
    view,
    candidate,
}) {
    return (
        <main className="flex-1 min-h-0 flex flex-col bg-[#f9fafb]">

            {/* Header */}
            <header className="h-16 border-b border-gray-200 bg-white flex items-center justify-between px-6">

                <div>
                    <h1 className="font-semibold text-gray-900">

    {view === "resume"
        ? "Resume"
        : view === "interview"
            ? "Interview Questions"
            : "Divyansh's AI Representative"}

</h1>

                    <p className="text-xs text-gray-500">
                        {view === "resume"
                            ? "Candidate profile and experience"
                            : "Ask questions about the candidate"}
                    </p>
                </div>

                <div className="flex items-center gap-2 text-xs text-gray-500">

                    <span className="w-2 h-2 rounded-full bg-green-500"></span>

                    Online

                </div>

            </header>


            {/* Main content */}

            {view === "resume" ? (

                <div className="flex-1 overflow-y-auto p-8">

                    <div className="max-w-4xl mx-auto bg-white rounded-2xl border border-gray-200 shadow-sm p-8">

                        <div className="border-b border-gray-200 pb-6 mb-6">

                            <h2 className="text-3xl font-bold text-gray-900">
                                Divyansh Chauhan
                            </h2>

                            <p className="text-gray-500 mt-2">
                                B.Tech Computer Science & Engineering
                            </p>

                            <p className="text-sm text-gray-400 mt-1">
                                Amity University, Haryana
                            </p>

                        </div>


                        {/* Education */}

                        <section className="mb-8">

                            <h3 className="text-lg font-semibold text-gray-900 mb-3">
                                Education
                            </h3>

                            <div className="bg-gray-50 rounded-xl p-4">

                                <p className="font-medium text-gray-800">
                                    B.Tech, Computer Science & Engineering
                                </p>

                                <p className="text-sm text-gray-500 mt-1">
                                    Sep. 2022 – May 2026
                                </p>

                                <p className="text-sm text-gray-500">
                                    Amity School of Engineering and Technology,
                                    Amity University, Haryana
                                </p>

                                <p className="text-sm text-gray-500 mt-1">
                                    CGPA: 8.56/10
                                </p>

                            </div>

                        </section>


                        {/* Technical Skills */}

                        <section className="mb-8">

                            <h3 className="text-lg font-semibold text-gray-900 mb-3">
                                Technical Skills
                            </h3>

                            <div className="flex flex-wrap gap-2">

                                {[
                                    "Java",
                                    "Python",
                                    "Django",
                                    "SAP ABAP",
                                    "Spring Boot",
                                    "FastAPI",
                                    "JSON",
                                    "RabbitMQ",
                                    "MySQL",
                                    "PostgreSQL",
                                    "Redis",
                                    "Git/GitHub",
                                    "Docker Compose",
                                    "Data Structures",
                                    "OOP",
                                    "System Design",
                                    "DBMS",
                                ].map((skill) => (

                                    <span
                                        key={skill}
                                        className="px-3 py-1.5 bg-gray-100 text-gray-700 rounded-lg text-sm"
                                    >
                                        {skill}
                                    </span>

                                ))}

                            </div>

                        </section>


                        {/* Experience */}

                        <section className="mb-8">

                            <h3 className="text-lg font-semibold text-gray-900 mb-4">
                                Experience
                            </h3>


                            <div className="space-y-5">

                                <div>

                                    <h4 className="font-semibold text-gray-800">
                                        Java Developer Intern — Elevate Labs
                                    </h4>

                                    <p className="text-sm text-gray-500 mb-2">
                                        June 2025 – July 2025
                                    </p>

                                    <p className="text-sm text-gray-600">
                                        Engineered a full-stack expense management
                                        system using Java, MySQL, JavaFX and MVC
                                        architecture with wallet management and
                                        real-time balance updates.
                                    </p>

                                </div>


                                <div>

                                    <h4 className="font-semibold text-gray-800">
                                        AI Intern — TechSaksham Program
                                    </h4>

                                    <p className="text-sm text-gray-500 mb-2">
                                        Jan. 2025 – Feb. 2025
                                    </p>

                                    <p className="text-sm text-gray-600">
                                        Trained and evaluated machine learning
                                        models across multiple case studies using
                                        Python, including data preprocessing and
                                        model training.
                                    </p>

                                </div>

                            </div>

                        </section>


                        {/* Projects */}

                        <section className="mb-8">

                            <h3 className="text-lg font-semibold text-gray-900 mb-4">
                                Projects
                            </h3>

                            <div className="space-y-5">

                                <div>

                                    <h4 className="font-semibold text-gray-800">
                                        Library Management System
                                    </h4>

                                    <p className="text-sm text-gray-600 mt-1">
                                        Spring Boot, Spring Security, JWT and MySQL.
                                        Secure RESTful system with role-based
                                        authorization, DTO validation and BCrypt
                                        password encryption.
                                    </p>

                                </div>


                                <div>

                                    <h4 className="font-semibold text-gray-800">
                                        URL Shortener
                                    </h4>

                                    <p className="text-sm text-gray-600 mt-1">
                                        React.js, Vite, Django REST Framework,
                                        PostgreSQL, Redis and Docker Compose.
                                        Includes custom aliases, expiry-based
                                        links, click analytics and QR code
                                        generation.
                                    </p>

                                </div>

                            </div>

                        </section>


                        {/* Certifications */}

                        <section>

                            <h3 className="text-lg font-semibold text-gray-900 mb-3">
                                Certifications
                            </h3>

                            <ul className="text-sm text-gray-600 space-y-2">

                                <li>
                                    • SAP ABAP Programming for Beginners — Udemy
                                </li>

                                <li>
                                    • Software Engineering Job Simulation —
                                    JPMorgan Chase & Co.
                                </li>

                                <li>
                                    • Software Development Essentials —
                                    Microsoft and LinkedIn
                                </li>

                            </ul>

                        </section>

                    </div>

                </div>

            ) : view === "interview" ? (

    <InterviewPanel candidate={candidate} />

    ) : view === "job-match" ? (

    <JobMatchPanel />

    ) : view === "why-hire" ? (

    <WhyHirePanel candidate={candidate} />

) : (

    <>
        {/* Chat */}

                    {messages.length === 0 ? (

                        <Welcome
                            onSuggestionClick={onSuggestionClick}
                        />

                    ) : (

                        <ChatWindow
                            messages={messages}
                            loading={loading}
                            candidate={candidate}
                        />

                    )}

                    {error && (
    <div className="px-6 pb-3">
        <div className="flex items-center gap-2 px-4 py-3 rounded-xl bg-red-50 border border-red-200 text-red-600 text-sm">
            <span>⚠️</span>
            <span>{error}</span>
        </div>
    </div>
)}


                    {/* Input */}

                    <ChatInput
                        question={question}
                        setQuestion={setQuestion}
                        handleSend={handleSend}
                        loading={loading}
                    />
                </>

            )}

        </main>
    );
}