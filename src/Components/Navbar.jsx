import { useState } from "react";
import { useAuth } from "../contexts/AuthContext";

import { auth } from "../firebase";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

import avatar from "../assets/avatar.png";

const Navbar = () => {
    const navigate = useNavigate();
    const [showMenu, setShowMenu] = useState(false);
    const { user } = useAuth();

    const handleLogout = () => {
      setShowMenu(false)
      auth.signOut()
      .then(() => {
        toast.success("Logged out successfully")
        navigate("/")
      })
      .catch((err) => {
        toast.error(err.message)
      }
      )
  }
  return (
    <div
      className={`flex items-center h-[4.5rem] m-4 ${
        user ? "justify-between" : "justify-center"
      }`}
    >
      <h1 className={`${user ? "text-3xl" : "text-6xl"} text-gray-200`}>
        DiagonDialogue
      </h1>
      {user && (
        <>
          <div className="relative">
            <img
              className="rounded-full w-12 h-12 cursor-pointer"
              src={user.photoURL || avatar}
              alt="avatar"
              onClick={() => setShowMenu(!showMenu)}
            />
            {showMenu && (
              <div className="absolute top-12 right-0 w-48 rounded-md bg-[#ffffffe0] shadow-lg py-2">
                <p className="block px-4 py-2 text-xl">
                  {user.displayName}
                </p>
                <button className="block px-4 py-2 text-xl hover:bg-[#ffffff38] w-full">
                  Profile
                </button>
                <button onClick={handleLogout} className="block px-4 py-2 text-xl hover:bg-[#ffffff38] w-full">
                  Logout
                </button>
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
}

export default Navbar