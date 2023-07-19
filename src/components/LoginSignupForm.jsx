import React, { useState } from 'react'
import SignIn from '../Auth/SignIn';
import SignUp from '../Auth/SignUp';

const LoginSignupForm = () => {

  const [showSignUp, setShowSignUp] = useState(false);
  
  return (
    <div>
      <div>{showSignUp ? <SignUp /> : <SignIn />}</div>
      <div className="flex justify-center">
        <div className="mt-10 text-center text-sm text-gray-500 cursor-pointer flex gap-1 mx-auto">
          {showSignUp ? "Already a member?" : "Not a member?"}
          <p
            onClick={() => setShowSignUp(!showSignUp)}
            className="pl-2 font-semibold leading-6 text-[#3E78AD] hover:underline"
          >
            {showSignUp ? "Log In" : "Sign Up"}
          </p>
        </div>
      </div>
    </div>
  );
}

export default LoginSignupForm