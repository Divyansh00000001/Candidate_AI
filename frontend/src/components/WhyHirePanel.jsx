export default function WhyHirePanel({ candidate }) {

    const answer =
        candidate?.interview_answers?.why_should_we_hire_you;

    return (

        <main className="flex-1 overflow-y-auto bg-gray-50">

            <div className="max-w-4xl mx-auto px-8 py-8">

                {/* Header */}

                <div className="mb-8">

                    <h2 className="text-3xl font-bold text-gray-900">
                        Why Hire Me?
                    </h2>

                    <p className="text-gray-500 mt-2">
                        Why Divyansh could be a strong fit for a
                        Software Engineer role.
                    </p>

                </div>


                {/* Candidate */}

                <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-6 mb-5">

                    <div className="flex items-center gap-4">

                        <div className="w-14 h-14 rounded-full bg-blue-600 text-white flex items-center justify-center text-xl font-bold">
                            D
                        </div>

                        <div>

                            <h3 className="text-xl font-semibold text-gray-900">
                                {candidate?.personal_information?.name}
                            </h3>

                            <p className="text-gray-500">
                                Software Engineer
                            </p>

                        </div>

                    </div>

                </div>


                {/* Strengths */}

                <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-6 mb-5">

                    <h3 className="text-lg font-semibold text-gray-900 mb-5">
                        What I Bring
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                        {candidate?.strengths?.map(
                            (strength, index) => (

                                <div
                                    key={index}
                                    className="flex items-center gap-3"
                                >

                                    <div className="w-8 h-8 rounded-lg bg-green-50 text-green-600 flex items-center justify-center">
                                        ✓
                                    </div>

                                    <span className="text-gray-700">
                                        {strength}
                                    </span>

                                </div>

                            )
                        )}

                    </div>

                </div>


                {/* Experience */}

                <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-6 mb-5">

                    <h3 className="text-lg font-semibold text-gray-900 mb-5">
                        Practical Experience
                    </h3>

                    <div className="space-y-5">

                        {candidate?.experience?.map(
                            (experience, index) => (

                                <div
                                    key={index}
                                    className="border-l-2 border-blue-500 pl-5"
                                >

                                    <h4 className="font-semibold text-gray-900">
                                        {experience.role}
                                    </h4>

                                    <p className="text-sm text-blue-600 mt-1">
                                        {experience.company}
                                    </p>

                                    <ul className="mt-3 space-y-2">

                                        {experience.responsibilities?.map(
                                            (responsibility, i) => (

                                                <li
                                                    key={i}
                                                    className="text-sm text-gray-600"
                                                >
                                                    • {responsibility}
                                                </li>

                                            )
                                        )}

                                    </ul>

                                </div>

                            )
                        )}

                    </div>

                </div>


                {/* Why Hire Me */}

                <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-6">

                    <div className="flex items-center gap-3 mb-4">

                        <div className="w-9 h-9 rounded-lg bg-blue-50 flex items-center justify-center">
                            ⭐
                        </div>

                        <h3 className="text-lg font-semibold text-gray-900">
                            Why Hire Me?
                        </h3>

                    </div>

                    <p className="text-gray-600 leading-7">
                        {answer ||
                            "I don't have enough information to answer that."}
                    </p>

                </div>

            </div>

        </main>

    );
}