export default function SkillsCard({ skills }) {

    if (!skills) return null;

    const categories = [
        {
            title: "Programming Languages",
            items: skills.programming_languages,
        },
        {
            title: "Frameworks",
            items: skills.frameworks,
        },
        {
            title: "Databases",
            items: skills.databases,
        },
        {
            title: "Tools",
            items: skills.tools,
        },
        {
            title: "Core Subjects",
            items: skills.core_subjects,
        },
    ];

    return (
        <div className="mt-5">

            <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Technical Skills
            </h3>

            <div className="space-y-3">

                {categories.map((category) => (

                    <div key={category.title}>

                        <p className="font-medium text-gray-800">
                            {category.title}
                        </p>

                        <ul className="list-disc ml-6 mt-1 text-gray-600 space-y-1">

                            {category.items?.map((item, index) => (
                                <li key={index}>
                                    {item}
                                </li>
                            ))}

                        </ul>

                    </div>

                ))}

            </div>

        </div>
    );
}