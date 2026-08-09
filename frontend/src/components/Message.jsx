import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import ProjectCard from "./ProjectCard";
import SkillsCard from "./SkillsCard";
import { Copy, Check } from "lucide-react";
import { useState } from "react";

export default function Message({ message, candidate }) {

    const [copied, setCopied] = useState(false);

const handleCopy = async () => {
    try {
        await navigator.clipboard.writeText(message.content);

        setCopied(true);

        setTimeout(() => {
            setCopied(false);
        }, 1500);

    } catch (error) {
        console.error("Failed to copy prompt:", error);
    }
};

    const isUser = message.role === "user";

    return (

        <div
            className={`flex mb-6 ${
                isUser
                    ? "justify-end"
                    : "justify-start"
            }`}
        >

            {isUser ? (

                /* USER MESSAGE */

                <div className="max-w-[65%] group">

    <div className="bg-blue-600 text-white px-5 py-3 rounded-2xl rounded-br-md shadow-sm">

        <div className="text-[15px] leading-6">
            {message.content}
        </div>

    </div>

    <div className="flex justify-end mt-1">

        <button
            onClick={handleCopy}
            className="opacity-0 group-hover:opacity-100 transition-opacity p-1.5 rounded-md text-gray-400 hover:text-gray-700 hover:bg-gray-100"
            title="Copy prompt"
        >
            {copied ? (
                <Check size={15} />
            ) : (
                <Copy size={15} />
            )}
        </button>

    </div>

</div>

            ) : (

                /* AI MESSAGE */

                <div className="flex gap-3 max-w-[90%]">

                    <div className="flex-shrink-0 w-9 h-9 rounded-full bg-gray-700 flex items-center justify-center">
                        🤖
                    </div>


                    <div className="flex-1 min-w-0">

                        {/* AI Answer */}

                        <div className="text-gray-700 leading-8 text-[16px]">

                            <ReactMarkdown
                            remarkPlugins={[remarkGfm]}
                                components={{

                                    p: ({ children }) => (
                                        <p className="mb-4 last:mb-0">
                                            {children}
                                        </p>
                                    ),

                                    ul: ({ children }) => (
                                        <ul className="list-disc ml-6 mb-4 space-y-2">
                                            {children}
                                        </ul>
                                    ),

                                    ol: ({ children }) => (
                                        <ol className="list-decimal ml-6 mb-4 space-y-2">
                                            {children}
                                        </ol>
                                    ),

                                    strong: ({ children }) => (
                                        <strong className="font-semibold text-gray-900">
                                            {children}
                                        </strong>
                                    ),

                                    a: ({ children, ...props }) => (
    <a
        {...props}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 underline hover:text-blue-800"
    >
        {children}
    </a>
),

                                    h3: ({ children }) => (
                                        <h3 className="text-lg font-semibold text-gray-900 mb-3">
                                            {children}
                                        </h3>
                                    ),

                                }}
                            >
                                {message.content}
                            </ReactMarkdown>

                        </div>


                        {/* PROJECT CARDS */}

                        {message.isProjectQuestion &&
                            candidate?.projects?.length > 0 && (

                                <div className="mt-5 space-y-4">

                                    {candidate.projects.map(
                                        (project, index) => (

                                            <ProjectCard
                                                key={index}
                                                project={project}
                                            />

                                        )
                                    )}

                                </div>

                            )}

                            {message.isSkillsQuestion &&
    candidate?.skills && (

        <SkillsCard
            skills={candidate.skills}
        />

    )}

                    </div>

                </div>

            )}

        </div>

    );
}