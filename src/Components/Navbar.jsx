import { useState } from "react";
import { useAuth } from "../contexts/AuthContext";

import { auth } from "../firebase";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

import avatar from "../assets/avatar.webp";

const Navbar = () => {
    const navigate = useNavigate();
    const [showMenu, setShowMenu] = useState(false);
    const { user } = useAuth();
    console.log(user);
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
      className={`flex fixed items-center h-[4.5rem] p-4 ${
        user ? "justify-between" : "justify-center"
      } bg-white bg-opacity-10 shadow-lg backdrop-filter backdrop-blur-lg w-full`}
    >
      <h1 className={`${user ? "text-5xl" : "text-6xl"} text-gray-200`}>
        DiagonDialogue
      </h1>
      {user && (
        <>
          <img
            className="rounded-full w-12 h-12 cursor-pointer"
            src={user.photoURL ? user.photoURL : avatar}
            alt="avatar"
            onClick={() => setShowMenu(!showMenu)}
          />
          {showMenu && (
            <div className="absolute top-20 right-5 w-48 rounded-md bg-[#ffffffe0] shadow-lg py-2">
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
        </>
      )}
    </div>
  );
}

export default Navbar