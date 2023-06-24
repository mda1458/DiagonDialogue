import { FcGoogle} from "react-icons/fc";

const LoginPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-[#0E0D16] via-gray-600 to-[#651C32]">
      <h1 className="text-6xl mb-8 text-gray-200">Apparate</h1>
      <div className="flex space-x-4">
        <button className="flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md bg-white text-2xl text-gray-700 hover:bg-gray-300">
          <FcGoogle className="mr-2" />
          Alhomora with Google
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
