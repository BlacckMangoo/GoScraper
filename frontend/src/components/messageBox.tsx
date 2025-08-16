type UserType = "sender" | "receiver";

interface MessageBoxProps {
  message: string;
  userType: UserType;
}

export default function MessageBox({ message, userType }: MessageBoxProps) {
  const isSender = userType === "sender";

  return (
    <div
      className={`p-4 rounded-lg mb-4 max-w-xs ${
        isSender
          ? "border border-green-400 text-right ml-auto"
          : "border border-green-400 text-left mr-auto"
      }`}
      role="note"
      aria-label={isSender ? "Sent message" : "Received message"}
    >
      <p className="text-green-500 break-words">{message}</p>
    </div>
  );
}       
