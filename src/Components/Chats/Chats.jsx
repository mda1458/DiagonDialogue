import { auth, firestore } from '../../firebase'
import { useCollectionData } from 'react-firebase-hooks/firestore'
import ChatMessage from './ChatMessage'
import firebase from 'firebase/compat/app'
import { useRef } from 'react'

const Chats = () => {
  const messageRef = firestore.collection('messages')
  const query = messageRef.orderBy('createdAt').limit(25)
  const [ messages ] = useCollectionData(query, {idField: 'id'});
  const dummy = useRef()
  const sendMessage = async (e) => {
    e.preventDefault()
    const { uid, photoURL } = auth.currentUser
    const text = e.target.text.value
    await messageRef.add({
      text,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      uid,
      photoURL
    })
    dummy.current.scrollIntoView({ behavior: 'smooth' })
    e.target.text.value = ''
  }

  return (
    <>
      {/* Chats */}
      <main className="flex flex-col items-center justify-center w-full flex-1 lg:px-20 text-center pt-20 pb-24">
        <div className="flex flex-col w-full h-full overflow-y-auto">
          {messages &&
            messages.map((msg) => <ChatMessage key={msg.id} message={msg} />)}
          <div ref={dummy}></div>
        </div>
      </main>
      {/* Chat Input */}
      <form
        className="flex items-center justify-center w-full h-24 px-4 py-2 fixed bottom-0 top-screen bg-white bg-opacity-10 shadow-lg backdrop-filter backdrop-blur-lg"
        onSubmit={sendMessage}
      >
        <input
          className="flex-1 px-4 py-2 mr-4 text-xl border border-gray-300 rounded-md focus:outline-none"
          type="text"
          name="text"
          placeholder="Type your message here..."
        />
        <button
          className="px-4 py-2 text-xl font-semibold text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none"
          type="submit"
        >
          🕊️
        </button>
      </form>
    </>
  );
}

export default Chats