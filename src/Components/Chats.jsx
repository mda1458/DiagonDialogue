import { useEffect } from "react"

import { useAuth } from "../contexts/AuthContext"
import { auth } from "../firebase"
import { useNavigate } from "react-router-dom"

const Chats = () => {
  const navigate = useNavigate();
  const { user } = useAuth()
  useEffect(() => {
    console.log(user)
  }, [user])

  const handleLogout = () => {
    auth.signOut();
    navigate("/");
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-[#0E0D16] via-gray-600 to-[#651C32]">
      <h1 className="text-6xl mb-8 text-gray-200">DiagonDialogue</h1>
      <div className="flex flex-col space-y-4 md:flex-row md:space-x-6 md:space-y-0">
        <button
          className="flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md bg-white text-2xl text-gray-700 hover:bg-gray-300"
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>
    </div>
    
  )
}

export default Chats