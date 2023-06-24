import { useState } from "react";

import firebase from "firebase/compat/app";
import { auth } from "../firebase";

import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const loginbyEmail = (e) => {
        e.preventDefault();
        console.log (email, password);
    }
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-[#0E0D16] via-gray-600 to-[#651C32]">
      <h1 className="text-6xl mb-8 text-gray-200">DiagonDialogue</h1>
      <div className="flex flex-col space-y-4 md:flex-row md:space-x-6 md:space-y-0">
        <button 
            className="flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md bg-white text-2xl text-gray-700 hover:bg-gray-300"
            onClick={() => auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())}
        >
          <FcGoogle className="mr-2" />
          Alhomora with Google
        </button>
        <button 
            className="flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md bg-white text-2xl text-gray-700 hover:bg-gray-300"
            onClick={() => auth.signInWithRedirect(new firebase.auth.FacebookAuthProvider())}
        >
          <FaFacebook className="mr-2 text-blue-800" />
          Alhomora with Facebook
        </button>
      </div>
      <div className="text-3xl mt-4 sm:mt-8 text-gray-200"> - OR - </div>
      <form
        className="mt-4 sm:mt-8 flex flex-col gap-4"
        onSubmit={loginbyEmail}
      >
        <div>
          <label
            htmlFor="email"
            className="block mb-2 text-2xl font-medium text-gray-200"
          >
            Your email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-2xl sm:text-3xl rounded-lg block w-full p-2.5 text-black focus:outline-none"
            placeholder="name@company.com"
            required
          />
        </div>
        <div>
          <label
            htmlFor="password"
            className="block mb-2 text-2xl font-medium text-gray-200"
          >
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="••••••••"
            className="bg-gray-50 border border-gray-300 text-2xl sm:text-3xl rounded-lg block w-full p-2.5 text-black focus:outline-none"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full text-white bg-primary-600 hover:bg-[#651C32] font-medium rounded-lg text-3xl px-5 py-2.5 text-center"
        >
          Alhomora
        </button>
        <p className="text-3xl font-light text-gray-500 dark:text-gray-400">
          Don’t have an account yet?{" "}
          <a
            href="#"
            className="font-medium text-gray-200 hover:underline hover:text-[#651C32] "
          >
            Join
          </a>
        </p>
      </form>
    </div>
  );
};

export default Login;
