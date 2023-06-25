import { useState } from "react";
import { toast } from "react-toastify";
import { auth } from "../firebase"

const Verify = () => {
    const [sent, setSent] = useState(false);
    const sendVerification = () => {
        auth.currentUser.sendEmailVerification()
            .then(() => {
                setSent(true);
                toast.success("Verification Email Sent!");
                setInterval(() => {
                    setSent(false);
                }
                , 60000);
            })
            .catch((err) => {
                toast.error(err.message);
            });
    }
  return (
    <div className="flex flex-col m-10 p-4 md:mx-36 md:my-12 md:p-28 bg-[#ffffff5d] rounded-2xl items-center justify-center h-[cal(100vh-5rem)]">
      <div className="flex flex-col items-center justify-center gap-4">
        <p className="text-2xl md:text-3xl">
          DiagonDialogue is a place where you can talk to your friends and
          family without any fear of being tracked by the Ministry of Magic. We
          use the latest magic to keep your conversations safe and secure 😉.
        </p>
        <p className="text-2xl md:text-3xl">
          {"Don't"} forget to check out your Email box! You will find a
          PortKey🗝️ to activate your account.
        </p>
      </div>
      <button
        className="flex items-center justify-center my-10 px-4 py-2 border border-gray-300 rounded-md bg-white text-2xl text-white bg-gradient-to-r from-[#651C32] via-gray-600 to-[#0E0D16] outline-none border-none disabled:from-gray-600 disabled:via-gray-600 disabled:to-gray-600"
        onClick={sendVerification}
        disabled={sent}
      >
        {sent ? "Resend in 60s" :
        "Resend Verification Email"
        }
      </button>
    </div>
  );
}

export default Verify