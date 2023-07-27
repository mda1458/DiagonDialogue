import { useState } from "react";
import { Link } from "react-router-dom";
import avatar from "../assets/avatar.webp";

import { toast } from "react-toastify";

import { auth } from "../firebase";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCPassword] = useState("");
  const register = (e) => {
    e.preventDefault();
    if (password !== cpassword) {
        toast.error("PortKeys Missmatch");
        return;
    }
    
    auth.createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            var user = userCredential.user;
            auth.currentUser.sendEmailVerification();
            user.updateProfile({
                displayName: name,
                photoURL: avatar,
            })
            .then(() => {
                toast.success("Registered Successfully");
            }
            )
            .catch((error) => {
                    toast.error(error.message);
                }
            );
        }
        )
        .catch((error) => {
                toast.error(error.message);
            }
        );

  };
  return (
    <div className="flex items-center justify-center h-screen">
        <form
        className="flex flex-col gap-4 md:w-[29rem]"
        onSubmit={register}
        >
            <div>
            <label
                htmlFor="name"
                className="block mb-2 text-2xl font-medium text-gray-200"
            >
                Your Name
            </label>
            <input
                type="text"
                name="name"
                id="name"
                onChange={(e) => setName(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-2xl sm:text-3xl rounded-lg block w-full p-2.5 text-black focus:outline-none"
                placeholder="name@company.com"
                required
            />
            </div>
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
                PortKey
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
            <div>
            <label
                htmlFor="password"
                className="block mb-2 text-2xl font-medium text-gray-200"
            >
                Confirm PortKey
            </label>
            <input
                type="password"
                name="cpassword"
                id="cpassword"
                onChange={(e) => setCPassword(e.target.value)}
                placeholder="••••••••"
                className="bg-gray-50 border border-gray-300 text-2xl sm:text-3xl rounded-lg block w-full p-2.5 text-black focus:outline-none"
                required
            />
            </div>
            <button
            type="submit"
            className="w-full text-white bg-gradient-to-r from-[#651C32] via-gray-600 to-[#0E0D16] font-medium rounded-lg text-3xl px-5 py-2.5 text-center"
            >
            Join
            </button>
            <p className="text-3xl text-center font-light text-gray-300">
            Already have an account?{" "}
            <Link
                to="/"
                className="font-medium text-gray-200 hover:underline hover:text-[#651C32] "
            >
                Alhomora
            </Link>
            </p>
        </form>
    </div>
  );
};

export default Signup;
