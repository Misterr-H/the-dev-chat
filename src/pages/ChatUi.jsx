import LeftChatBubble from "../components/LeftChatBubble";
import RightChatBubble from "../components/RigthChatBubble";
import UserChip from "../components/UserChip";

const ChatUi = () => {
    return (
        <div className="flex">
            <div className="w-1/4 flex flex-col border-2 border-black h-screen">
                <div className="w-full h-20 bg-primary mb-2 text-white flex items-center justify-center">
                    <h1 className="text-xl font-bold">The Dev Chat</h1>
                </div>
                <UserChip/>
                <UserChip/>
                <UserChip/>
                <UserChip/>
                <UserChip/>
            </div>
            <div className="w-3/4 border-2 border-black h-screen flex flex-col">
                <div className="w-full h-20 bg-primary mb-2 text-white flex items-center r ">
                    <h1 className="text-xl font-bold ml-10">John Doe</h1>
                </div>
                <RightChatBubble/>
                <LeftChatBubble/>
                <LeftChatBubble/>
                <div className="flex ">
                    <div className="fixed bottom-0 mb-1 w-4/5 ">
                        <input className="w-4/5 h-10 p-2" placeholder="Type something...." name="message" />
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default ChatUi;