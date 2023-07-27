import { auth } from "../../firebase"

const ChatMessage = (props) => {
    const {text, uid, photoURL} = props.message
  return (
    <div
      className={`flex items-center w-full my-2 justify-start ${
        uid === auth.currentUser.uid ? "flex-row-reverse" : ""
      }`}
    >
      <img className="w-12 h-12 rounded-full" src={photoURL} alt="avatar" />
      <p className="px-4 py-2 mx-4 text-xl bg-gray-200 rounded-md">{text}</p>
    </div>
  );
}

export default ChatMessage