export default function InputBox() {

    return (
        <>
            <div className="w-full flex flex-col ">
                <div className="bg-black border border-green-700 rounded-lg flex items-center" >
                    <input
                        type="text"
                        className="bg-transparent border-none flex-1 p-4 text-green-500 placeholder-white outline-none"
                        placeholder="Type your message..."
                    />
                    <button className="text-green-500 hover:text-green-400 px-4 py-2  hover:border-green-400/40 hover:border ">
                        Send
                    </button>
                </div>

                <div className="">

                </div>
            </div>
        </>
    )
}