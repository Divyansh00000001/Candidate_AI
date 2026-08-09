export default function ProjectCard({ project }) {

    return (

        <div className="border border-gray-200 rounded-2xl p-5 bg-white shadow-sm hover:shadow-md transition">

            {/* Header */}

            <div className="flex items-start justify-between gap-4">

                <div>

                    <h3 className="text-lg font-semibold text-gray-900">
                        {project.name}
                    </h3>

                    <p className="text-sm text-gray-500 mt-1">
                        {project.description}
                    </p>

                </div>

            </div>


            {/* Technologies */}

            <div className="flex flex-wrap gap-2 mt-4">

                {project.technologies?.map(
                    (technology, index) => (

                        <span
                            key={index}
                            className="px-2.5 py-1 rounded-md bg-gray-100 text-gray-600 text-xs font-medium"
                        >
                            {technology}
                        </span>

                    )
                )}

            </div>


            {/* GitHub */}

            {project.github && (

                <div className="mt-5">

                    <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-900 text-white text-sm font-medium hover:bg-gray-800 transition"
                    >
                        GitHub ↗
                    </a>

                </div>

            )}

        </div>

    );
}