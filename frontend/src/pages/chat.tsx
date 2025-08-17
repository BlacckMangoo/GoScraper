
import MessageBox from "../components/messageBox"
import InputBox from "../components/inputBox"

import { useState } from "react";

type Message = {
  message: string;
  time: string;
  userType?: "sender" | "receiver";
}

export default function Chat() {
  const [sentMessages, setSentMessages] = useState<Message[]>([]);

  const handleSendMessage = (message: string) => {
    setSentMessages([...sentMessages, { message, time: new Date().toLocaleTimeString() }]);
  }

  return (
    <>
      <div className="h-dvh w-full flex justify-center bg-gray-900">
        <div className="flex flex-col w-1/2 border border-gray-700 rounded-lg shadow-lg m-10 p-6 bg-gray-800">

          <div className="flex flex-col w-full h-full overflow-y-auto space-y-2 pr-2">
            {sentMessages.map((message, index) => (
              <MessageBox
                key={index}
                message={message.message}
                userType={index % 2 === 0 ? "sender" : "receiver"}
                time={message.time}
              />
            ))}
          </div>

          <div className="flex w-full pt-4 border-t border-gray-600 mt-4">
            <InputBox onSendMessage={handleSendMessage} />
          </div>
        </div>
      </div>
    </>
  )
}
