import React, { useState } from "react";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import { Icon } from "@iconify/react";

const SignUp = () => {
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const signUp = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password, displayName)
      .then((userCredential) => {
        console.log(userCredential);
        navigate("/");
        updateProfile(userCredential.user, { displayName: displayName })
          .then(() => {
            // console.log("User display name added successfully!");
          })
          .catch((error) => {
            console.log("Error adding user display name: ", error);
          });
      })
      .catch((error) => {
        console.log(error);
        alert("Password must be 6 characters or more");
      });
  };

  return (
    <div className="py-12 lg:px-8">
      <div className="max-w-lg bg-white mx-auto border py-14 rounded-lg px-4 mt-2">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Create your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={signUp}>
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Name
              </label>
              <div className="mt-2">
                <input
                  value={displayName}
                  onChange={(e) => setDisplayName(e.target.value)}
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="your name"
                  className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#3E78AD] sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  placeholder="johndoe@gmail.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  id="email"
                  name="email"
                  type="email"
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
                  Password <span className="text-sm text-black/50">(must be 6 characters or more)</span>
                </label>
              </div>
              <div className="mt-2 relative">
                <input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  id="password"
                  name="password"
                  placeholder="Your password"
                  type={showPassword ? "text" : "password"}
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
                Sign Up
              </button>
            </div>
          </form>
          <div className="text-center mt-4">
            Already have an account?
            <Link to="/login" className="text-[#3E78AD] hover:underline pl-1">
              Log In
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
