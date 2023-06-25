import { Link } from "react-router-dom";

const Verify = () => {
  return (
    <div className="flex flex-col m-10 p-4 md:mx-36 md:my-12 md:p-28 bg-[#ffffff5d] rounded-2xl items-center justify-center h-[cal(100vh-5rem)]">
      <div className="flex flex-col items-center justify-center gap-4">
        <p className="text-2xl md:text-3xl text-[">
          DiagonDialogue is a place where you can talk to your friends and
          family without any fear of being tracked by the Ministry of Magic. We
          use the latest magic to keep your conversations safe and secure 😉.
        </p>
        <p className="text-2xl md:text-3xl text-[">
          {"Don't"} forget to check out your Email box! You will find a PortKey🗝️
          to activate your account.
        </p>
        <p className="text-2xl md:text-3xl text-[">
            Once you have activated your account, you can login and start chatting with your friends and family.
        </p>
      </div>
    </div>
  );
}

export default Verify