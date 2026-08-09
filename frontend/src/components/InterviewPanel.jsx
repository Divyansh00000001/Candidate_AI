import { useState } from "react";

const interviewQuestions = [
    {
        key: "tell_me_about_yourself",
        title: "Tell me about yourself",
    },
    {
        key: "why_should_we_hire_you",
        title: "Why should we hire you?",
    },
    {
        key: "strengths",
        title: "What are your strengths?",
    },
    {
        key: "weaknesses",
        title: "What are your weaknesses?",
    },
    {
        key: "career_goals",
        title: "What are your career goals?",
    },
    {
        key: "five_year_plan",
        title: "Where do you see yourself in five years?",
    },
    {
        key: "why_this_company",
        title: "Why do you want to join this company?",
    },
];

export default function InterviewPanel({ candidate }) {


    const [selectedQuestion, setSelectedQuestion] = useState(null);

    return (
        <div className="flex-1 overflow-y-auto p-8">

            <div className="max-w-4xl mx-auto">

                <div className="mb-8">

                    <h2 className="text-3xl font-bold text-gray-900">
                        Interview Questions
                    </h2>

                    <p className="text-gray-500 mt-2">
                        Practice answers based on your candidate profile.
                    </p>

                </div>


                <div className="space-y-3">

                    {interviewQuestions.map((question) => (

                        <div
                            key={question.key}
                            className="bg-white border border-gray-200 rounded-xl overflow-hidden"
                        >

                            <button
                                onClick={() =>
                                    setSelectedQuestion(
                                        selectedQuestion === question.key
                                            ? null
                                            : question.key
                                    )
                                }
                                className="w-full flex items-center justify-between p-5 text-left hover:bg-gray-50 transition"
                            >

                                <span className="font-medium text-gray-800">
                                    {question.title}
                                </span>

                                <span className="text-gray-400">
                                    {selectedQuestion === question.key
                                        ? "⌃"
                                        : "⌄"}
                                </span>

                            </button>


                            {selectedQuestion === question.key && (

                                <div className="px-5 pb-5">

                                    <div className="border-t border-gray-100 pt-4">

                                        <p className="text-gray-600 leading-7 whitespace-pre-wrap">
                                            {
                                                candidate?.interview_answers?.[
                                                    question.key
                                                ] ||
                                                "I don't have enough information to answer that."
                                            }
                                        </p>

                                    </div>

                                </div>

                            )}

                        </div>

                    ))}

                </div>

            </div>

        </div>
    );
}