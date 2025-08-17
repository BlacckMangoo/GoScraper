export type UserType = "sender" | "receiver";

interface MessageBoxProps {
  message: string;
  userType: UserType;
  time: string;
}

export default function MessageBox({ message, userType, time }: MessageBoxProps) {
  const isSender = userType === "sender";

  return (
    <div
      className={`p-3 rounded-2xl mb-2 max-w-xs transition-all duration-200 ${
        isSender
          ? "bg-blue-600 text-white ml-auto shadow-md"
          : "bg-gray-700 text-gray-100 mr-auto shadow-md"
      }`}
      aria-label={isSender ? "Sent message" : "Received message"}
    >
      <p className="text-sm leading-relaxed break-words">{message}</p>
      <span className="text-xs text-white/70">{time}</span>
    </div>
  );
}       
