import { useEffect, useRef } from "react";
import Message from "./Message";

export default function ChatWindow({ messages, loading, candidate }) {


    return (

        <div className="flex-1 overflow-y-auto px-8 py-8">

            <div className="flex justify-center mb-8">

                <div className="bg-gray-800 text-gray-400 px-5 py-2 rounded-full text-sm">

                    Today

                </div>

            </div>

            {
                messages.length === 0 && (

                    <div className="h-full flex items-center justify-center">

                        <div className="text-center text-gray-500">

                            <h2 className="text-5xl mb-4">
                                👋
                            </h2>

                            <p className="text-xl">
                                Ask anything about Divyansh
                            </p>

                        </div>

                    </div>

                )
            }

            {
                messages.map((message, index) => (

                    <Message
                        key={index}
                        message={message}
                        candidate={candidate}
                    />

                ))
            }

        </div>

    );

}