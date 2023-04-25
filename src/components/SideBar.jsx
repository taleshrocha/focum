import ChatButton from "./ChatButton";

export default function SideBar() {
  return (
    <nav 
      className="fixed left-0 top-0 h-screen w-48 bg-neutral-800"
    >
      <ChatButton name={"Chat1"}/>
      <ChatButton name={"Chat2"}/>
      <ChatButton name={"Chat3"}/>
      <ChatButton name={"Chat4"}/>
    </nav>
  )
}

