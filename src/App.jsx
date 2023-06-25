import { BrowserRouter, Routes, Route } from "react-router-dom"

import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

import Login from "./components/Login";
import Chats from "./components/Chats";

import { AuthProvider } from "./contexts/AuthContext"
import Signup from "./components/Signup";
import Navbar from "./components/Navbar";
import Verify from "./components/Verify";


const App = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/verify" element={<Verify />} />
          <Route path="/chats" element={<Chats />} />
        </Routes>
        <ToastContainer
          toastClassName={"fontHP"}
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={true}
          closeOnClick={true}
          rtl={false}
          pauseOnFocusLoss={false}
          draggable={true}
          pauseOnHover={true}
          theme="dark"
        />
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App