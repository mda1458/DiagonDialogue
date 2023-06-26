import { useState, useRef, useEffect } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom";

import { ChatEngine } from "react-chat-engine"
import avatar from "../assets/avatar.webp"

import { useAuth } from "../contexts/AuthContext"

const Chats = () => {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(true)
  const { user } = useAuth()

  const getFile = async (url) => {
    const response = await fetch(url)
    const data = await response.blob()

    return new File([data], "userPhoto.jpg", { type: "image/jpeg" })
  }

  useEffect(() => {
    if (!user) {
      navigate("/")
      return
    }
    axios.get("https://api.chatengine.io/users/me/", {
      headers: {
        "project-id": "c8a2c04a-f443-483f-bf9f-9354863bbb0d",
        "user-name": user.email,
        "user-secret": user.uid
      }
    })
    .then(() => {
      console.log("User exists")
      setLoading(false)
    })
    .catch(() => {
      let formdata = new FormData()
      formdata.append("email", user.email)
      formdata.append("username", user.email)
      formdata.append("secret", user.uid)
      
      getFile(user.photoURL)
      .then((avatar) => {
        formdata.append("avatar", avatar, avatar.name)

        axios
          .post("https://api.chatengine.io/users/", formdata, {
            headers: { "private-key": "fa99cbca-734f-4406-a4cd-4a65a7f76145" },
          })
          .then(() => setLoading(false))
          .catch((err) => console.log(err));
      })
    })
  }, [user])
  return (
    <ChatEngine
      style={{ position: "absolute", top: 0 }}
      height="calc(100vh - 4.5rem)"
      projectID="c8a2c04a-f443-483f-bf9f-9354863bbb0d"
      userName={user.email}
      userSecret={user.uid}
      onNewMessage={() =>
        new Audio(
          "https://chat-engine-assets.s3.amazonaws.com/click.mp3"
        ).play()
      }
    />
  );
}

export default Chats