export default function Sidebar({
    conversations,
    currentConversationId,
    onNewChat,
    onSelectConversation,
    onResume,
    onInterview,
    onJobMatch,
    onWhyHire,
    onDeleteConversation
}) {

    return (

        <aside className="w-64 bg-[#0f172a] text-white border-r border-gray-800 flex flex-col">

            {/* Candidate */}

            <div className="p-5 border-b border-gray-800">

                <div className="flex items-center gap-3">

                    <div className="w-10 h-10 rounded-lg bg-emerald-500 flex items-center justify-center font-bold">
                        D
                    </div>

                    <div>

                        <h2 className="font-semibold text-sm">
                            Candidate AI
                        </h2>

                        <p className="text-xs text-gray-400">
                            Divyansh Chauhan
                        </p>

                    </div>

                </div>

            </div>


            {/* New Chat */}

            <div className="p-4">

                <button
                    onClick={onNewChat}
                    className="w-full border border-gray-700 rounded-lg py-2.5 px-3 text-sm text-left hover:bg-gray-800 transition"
                >
                    + New chat
                </button>

            </div>


            {/* Tools */}

            <div className="px-4">

                <p className="text-[10px] font-semibold text-gray-500 mb-3">
                    AI TOOLS
                </p>

                <div className="space-y-1">

                    <button
    onClick={onResume}
    className="w-full text-left px-3 py-2 rounded-lg text-sm text-gray-300 hover:bg-gray-800"
>
    📄 Resume
</button>

                    <button
    onClick={onInterview}
    className="w-full text-left px-3 py-2 rounded-lg text-sm text-gray-300 hover:bg-gray-800"
>
    💬 Interview questions
</button>

                    <button
    onClick={onJobMatch}
    className="w-full text-left px-3 py-2 rounded-lg text-sm text-gray-300 hover:bg-gray-800"
>
    🎯 Job match
</button>

                    <button
    onClick={onWhyHire}
    className="w-full text-left px-3 py-2 rounded-lg text-sm text-gray-300 hover:bg-gray-800"
>
    ⭐ Why hire me?
</button>

                    <a
    href="/resume/Divyansh_Chauhan_Resume.pdf"
    download="Divyansh_Chauhan_Resume.pdf"
    className="block w-full text-left px-3 py-2 rounded-lg text-sm text-gray-300 hover:bg-gray-800"
>
    📥 Download resume
</a>

                </div>

            </div>


            {/* Conversation History */}

            <div className="px-4 mt-6 flex-1 overflow-y-auto scrollbar-hide">

                <p className="text-[10px] font-semibold text-gray-500 mb-3">
                    CONVERSATION HISTORY
                </p>


                <div className="space-y-1">

                    {conversations.length === 0 ? (

                        <p className="text-xs text-gray-500 px-3">
                            No conversations yet
                        </p>

                    ) : (

                        conversations.map((conversation) => (

                            <div
    className={`group flex items-center gap-2 px-3 py-2 rounded-xl cursor-pointer ${
        currentConversationId === conversation.id
            ? "bg-gray-800"
            : "hover:bg-gray-800"
    }`}
>

    <button
        onClick={() =>
            onSelectConversation(conversation.id)
        }
        className="flex-1 text-left text-sm text-gray-300 truncate"
    >
        {conversation.title}
    </button>

    <button
        onClick={(e) => {

            e.stopPropagation();

            onDeleteConversation(conversation.id);

        }}
        className="opacity-0 group-hover:opacity-100 text-gray-500 hover:text-red-400 transition"
        title="Delete conversation"
    >
        🗑
    </button>

</div>

                        ))

                    )}

                </div>

            </div>


            {/* Status */}

            <div className="p-4 border-t border-gray-800">

                <div className="flex items-center gap-2 text-xs text-gray-400">

                    <span className="w-2 h-2 rounded-full bg-emerald-400"></span>

                    AI representative online

                </div>

            </div>

        </aside>

    );

}