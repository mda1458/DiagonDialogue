import { BrowserRouter, Routes, Route } from "react-router-dom"

import Login from "./Components/Login"
import Chats from "./Components/Chats"

import { AuthProvider } from "./contexts/AuthContext"


const App = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/chats" element={<Chats />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App