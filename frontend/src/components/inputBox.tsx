




import React, { useState } from 'react';




export default function InputBox({onSendMessage}: { onSendMessage: (message: string) => void }) {

    const [userInput ,setUserInput] = useState<string>("");

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUserInput(event.target.value);
    };

    return (

        <>
            <div className="w-full flex flex-col">
                <div className="bg-gray-700 border border-gray-600 rounded-full flex items-center transition-all duration-200 hover:border-gray-500 focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500/20">
                    <input
                        type="text"
                        className="bg-transparent border-none flex-1 px-4 py-3 text-gray-100 placeholder-gray-400 outline-none text-sm"
                        placeholder="Type your message..."
                        onChange={handleInputChange}
                        value={userInput}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter' && userInput.trim()) {
                                onSendMessage(userInput);
                                setUserInput("");
                            }
                        }}
                    />
                    <button 
                        className="text-blue-500 hover:text-blue-400 hover:bg-blue-500/10 px-4 py-2 mx-1 rounded-full transition-all duration-200 text-sm font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                        onClick={() => {
                            if (userInput.trim()) {
                                onSendMessage(userInput);
                                setUserInput("");
                            }
                        }}
                        disabled={!userInput.trim()}
                    >
                        Send
                    </button>
                </div>
            </div>
        </>
    )
}