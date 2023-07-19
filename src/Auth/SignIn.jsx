import React, { useState } from "react";
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import { Icon } from "@iconify/react";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // console.log(userCredential);
        navigate("/");
      })
      .catch((error) => {
        console.log("check error", error);
        setError("Incorrect password or email. Please try again.");
      });
  };

  return (
    <div className="py-12 lg:px-8">
      <div className="max-w-lg bg-white mx-auto border py-14 rounded-lg px-4 mt-2">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in
          </h2>
        </div>
        {error && (
          <div className="bg-red-100 border border-red-200 sm:mx-auto sm:w-full sm:max-w-sm py-2 px-4 rounded mt-4">
            <p className="text-red-900 font-medium">{error}</p>
          </div>
        )}
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={signIn}>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  id="email"
                  name="email"
                  type="email"
                  placeholder="johndoe@gmail.com"
                  required
                  className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#3E78AD] sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
              </div>
              <div className="mt-2 relative">
                <input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="your password"
                  required
                  className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#3E78AD] sm:text-sm sm:leading-6"
                />
                <Icon
                  onClick={() => setShowPassword(!showPassword)}
                  icon={showPassword ? "el:eye-open" : "el:eye-close"}
                  className="w-4 h-4 hover:text-blue-500 text-gray-500 cursor-pointer absolute top-2/4 -translate-y-2/4 right-3"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="text-white bg-[#3E78AD] border-[#3E78AD] hover:bg-[#3E78AD]/90 hover:border-[#3E78AD]/90 px-3 py-1.5 text-base duration-300 border rounded-md hover:shadow-md disabled:opacity-50 w-full"
              >
                Log In
              </button>
            </div>
          </form>
          <div className="text-center mt-4">
            Don't have an account?{" "}
            <Link to="/signup" className="text-[#3E78AD] hover:underline pl-1">
              Sign up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
