
import MessageBox from "./components/messageBox"
import InputBox from "./components/inputBox"



function App() {

  return (
    <>
      <div className="bg-fixed h-dvh w-full flex justify-center bg-black">
        <div className="flex  flex-col w-1/2 border-green-500 border  m-10 p-10">


        <div className="flex flex-col w-full h-full overflow-y-auto">
          <MessageBox message="Hello, how are you?" userType="sender" />
          <MessageBox message="I'm good, thanks!" userType="receiver" />
          <MessageBox message="What are you up to?" userType="sender" />
          <MessageBox message="Just working on some code." userType="receiver" />
        </div>


          <div className="flex w-full pt-8 ">
            <InputBox />
          </div>
        </div>


      </div>
    </>
  )
}

export default App
