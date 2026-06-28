import React from "react";
import { FaRobot } from "react-icons/fa";
import { IoSparkles } from "react-icons/io5";
import { FcGoogle } from "react-icons/fc";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../utils/firebase";

function Auth() {
    const handleGooglAuth = async ()=>{
        try {
            const response = await signInWithPopup(auth,provider)
            console.log(response.user.displayName)
        } catch (error) {
            console.log("Error in firebase setup!",error)
        }
    }
  return (
    <div className="w-full min-h-screen bg-[#f3f3f3] flex items-center justify-center px-5 py-20">
      <div className="w-full max-w-md p-8 rounded-3xl bg-white shadow-2xl border border-gray-200">

        {/* Logo */}
        <div className="flex items-center justify-center gap-3 mb-6">
          <div className="bg-black text-white p-3 rounded-xl">
            <FaRobot size={22} />
          </div>

          <h2 className="font-bold text-2xl text-gray-800">
            InterviewIQ.AI
          </h2>
        </div>

        {/* Heading */}
        <h1 className="text-2xl md:text-3xl font-bold text-center leading-snug mb-4 text-gray-800">
          Continue with <br />

          <span className="mt-3 bg-green-100 text-green-600 px-4 py-2 rounded-full inline-flex items-center gap-2 text-lg">
            <IoSparkles size={18} />
            AI Smart Interview
          </span>
        </h1>

        {/* Description */}
        <p className="text-gray-500 text-center text-sm md:text-base leading-relaxed mb-8">
          Sign in to start AI-powered mock interviews, track your progress,
          receive intelligent feedback, and unlock detailed performance
          insights.
        </p>

        {/* Google Button */}
        <button onClick={handleGooglAuth}
          
          className="w-full flex items-center justify-center gap-3 bg-white border border-gray-300 rounded-xl py-3.5 font-semibold text-gray-700 hover:bg-gray-50 hover:shadow-lg hover:-translate-y-0.5 active:scale-95 transition-all duration-300"
        >
          <FcGoogle size={24} />
          Continue with Google
        </button>

        
      </div>
    </div>
  );
}

export default Auth;