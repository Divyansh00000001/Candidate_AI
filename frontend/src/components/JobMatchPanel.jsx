import { useState } from "react";
import { analyzeJobMatch } from "../services/api";

export default function JobMatchPanel() {

    const [jobDescription, setJobDescription] = useState("");
    const [result, setResult] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handleAnalyze = async () => {

        if (!jobDescription.trim()) return;

        setLoading(true);
        setError("");
        setResult(null);

        try {

            const data = await analyzeJobMatch(jobDescription);

            setResult(data);

        } catch (error) {

            console.error(error);

            setError(
                "Unable to analyze this job description. Please try again."
            );

        } finally {

            setLoading(false);

        }
    };


    const handleClear = () => {

        setJobDescription("");
        setResult(null);
        setError("");

    };


    const getMatchLabel = (score) => {

        if (score >= 80) return "Strong Match";

        if (score >= 60) return "Good Match";

        if (score >= 40) return "Moderate Match";

        return "Low Match";

    };


    return (

        <main className="flex-1 overflow-y-auto bg-gray-50">

            <div className="max-w-5xl mx-auto px-8 py-8">

                {/* Header */}

                <div className="mb-8">

                    <div className="flex items-center gap-3 mb-2">

                        <h2 className="text-3xl font-bold text-gray-900">
                            Job Match
                        </h2>

                        {result && (

                            <span className="px-3 py-1 rounded-full text-sm font-medium bg-blue-50 text-blue-600">
                                {getMatchLabel(result.match_score)}
                            </span>

                        )}

                    </div>

                    <p className="text-gray-500">
                        Compare a job description with Divyansh's skills,
                        experience and projects.
                    </p>

                </div>


                {/* Job Description */}

                <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-6">

                    <div className="flex items-center justify-between mb-3">

                        <div>

                            <h3 className="font-semibold text-gray-900">
                                Job Description
                            </h3>

                            <p className="text-sm text-gray-500 mt-1">
                                Paste the complete job description below.
                            </p>

                        </div>

                        <span className="text-xs text-gray-400">
                            {jobDescription.length} characters
                        </span>

                    </div>


                    <textarea
                        value={jobDescription}
                        onChange={(e) =>
                            setJobDescription(e.target.value)
                        }
                        placeholder="Paste the job description here..."
                        rows={8}
                        className="w-full border border-gray-200 rounded-xl p-4 text-gray-800 placeholder-gray-400 outline-none resize-none focus:ring-2 focus:ring-blue-100 focus:border-blue-500 transition"
                    />


                    <div className="flex items-center gap-3 mt-4">

                        <button
                            onClick={handleAnalyze}
                            disabled={
                                loading ||
                                !jobDescription.trim()
                            }
                            className={`px-6 py-3 rounded-xl font-semibold text-white transition ${
                                loading ||
                                !jobDescription.trim()
                                    ? "bg-gray-300 cursor-not-allowed"
                                    : "bg-blue-600 hover:bg-blue-700"
                            }`}
                        >
                            {loading
                                ? "Analyzing..."
                                : "Analyze Match"}
                        </button>


                        {(jobDescription || result) && (

                            <button
                                onClick={handleClear}
                                disabled={loading}
                                className="px-5 py-3 rounded-xl border border-gray-200 text-gray-600 hover:bg-gray-50 transition"
                            >
                                Clear
                            </button>

                        )}

                    </div>

                </div>


                {/* Error */}

                {error && (

                    <div className="mt-5 p-4 rounded-xl border border-red-200 bg-red-50 text-red-600">
                        {error}
                    </div>

                )}


                {/* Results */}

                {result && (

                    <div className="mt-6 space-y-5">

                        {/* Score + Summary */}

                        <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-6">

                            <div className="flex items-center justify-between">

                                <div>

                                    <p className="text-sm text-gray-500">
                                        Overall Match
                                    </p>

                                    <h3 className="text-2xl font-bold text-gray-900 mt-1">
                                        {getMatchLabel(
                                            result.match_score
                                        )}
                                    </h3>

                                    <p className="text-sm text-gray-500 mt-2">
                                        Based on skills, experience,
                                        projects and job requirements.
                                    </p>

                                </div>


                                {/* Score Circle */}

                                <div className="relative w-28 h-28">

                                    <svg
                                        className="w-28 h-28 -rotate-90"
                                        viewBox="0 0 100 100"
                                    >

                                        <circle
                                            cx="50"
                                            cy="50"
                                            r="42"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="8"
                                            className="text-gray-100"
                                        />

                                        <circle
                                            cx="50"
                                            cy="50"
                                            r="42"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="8"
                                            strokeLinecap="round"
                                            strokeDasharray="264"
                                            strokeDashoffset={
                                                264 -
                                                (264 *
                                                    result.match_score) /
                                                    100
                                            }
                                            className="text-blue-600"
                                        />

                                    </svg>


                                    <div className="absolute inset-0 flex items-center justify-center">

                                        <span className="text-2xl font-bold text-gray-900">
                                            {result.match_score}%
                                        </span>

                                    </div>

                                </div>

                            </div>

                        </div>


                        {/* Skills Grid */}

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                            {/* Matching */}

                            <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-6">

                                <div className="flex items-center justify-between mb-4">

                                    <h3 className="text-lg font-semibold text-gray-900">
                                        Matching Skills
                                    </h3>

                                    <span className="text-sm text-green-600">
                                        {result.matching_skills?.length || 0}
                                    </span>

                                </div>


                                {result.matching_skills?.length > 0 ? (

                                    <div className="flex flex-wrap gap-2">

                                        {result.matching_skills.map(
                                            (skill, index) => (

                                                <span
                                                    key={index}
                                                    className="px-3 py-1.5 rounded-lg bg-green-50 border border-green-100 text-green-700 text-sm"
                                                >
                                                    ✓ {skill}
                                                </span>

                                            )
                                        )}

                                    </div>

                                ) : (

                                    <p className="text-sm text-gray-500">
                                        No matching skills identified.
                                    </p>

                                )}

                            </div>


                            {/* Missing */}

                            <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-6">

                                <div className="flex items-center justify-between mb-4">

                                    <h3 className="text-lg font-semibold text-gray-900">
                                        Skill Gaps
                                    </h3>

                                    <span className="text-sm text-red-500">
                                        {result.missing_skills?.length || 0}
                                    </span>

                                </div>


                                {result.missing_skills?.length > 0 ? (

                                    <div className="flex flex-wrap gap-2">

                                        {result.missing_skills.map(
                                            (skill, index) => (

                                                <span
                                                    key={index}
                                                    className="px-3 py-1.5 rounded-lg bg-red-50 border border-red-100 text-red-600 text-sm"
                                                >
                                                    + {skill}
                                                </span>

                                            )
                                        )}

                                    </div>

                                ) : (

                                    <p className="text-sm text-green-600">
                                        No major skill gaps identified.
                                    </p>

                                )}

                            </div>

                        </div>


                        {/* Recommendation */}

                        <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-6">

                            <div className="flex items-center gap-3 mb-3">

                                <div className="w-9 h-9 rounded-lg bg-blue-50 flex items-center justify-center">
                                    💡
                                </div>

                                <h3 className="text-lg font-semibold text-gray-900">
                                    Recommendation
                                </h3>

                            </div>

                            <p className="text-gray-600 leading-7">
                                {result.recommendation}
                            </p>

                        </div>

                    </div>

                )}

            </div>

        </main>

    );
}