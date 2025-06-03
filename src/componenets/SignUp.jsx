import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
  sendEmailVerification
} from "firebase/auth";
import { ToastContainer, toast } from "react-toastify";

const SignUp = () => {
  const [userData, setUserData] = useState({
    fullName: "",
    email: "",
    password: "",
  });
  const auth = getAuth();

  const handleSignUp = () => {
    createUserWithEmailAndPassword(auth, userData.email, userData.password)
      .then((userCredential) => {
        updateProfile(auth.currentUser, {
          displayName: userData.fullName,
          photoURL: "https://example.com/jane-q-user/profile.jpg",
        })
          .then(() => {
          console.log(userData);
          
            toast.success("registration successful, please verify your email account ");
            
          })
          .catch((error) => {
           
          });
      })
      .catch((error) => {
        console.log(error.code);
        console.log(error.message);

        if (error.code === "auth/invalid-email") {
          toast.error("empty input fields");
        }

        if (error.code === "auth/missing-password") {
          toast.error("password is required");
        }

        if (error.code === "auth/missing-email") {
          toast.error("emp");
        }
      });
  };

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <section className="h-dvh bg-primary flex justify-center items-center ">
        <div className=" relative py-3 bg-secondColor sm:max-w-xl sm:mx-auto sm:scale-[0.85] scale-[.70]">
          <div className="relative signIn-shadow px-4 py-10 bg-primary border-6 shadow-2xl border-primary outline-4 outline-brand mx-8 md:mx-0  rounded-3xl sm:p-10 ">
            <div className="max-w-md mx-auto">
              <div className="flex items-center space-x-5 justify-center">
                <div className="">
                  <h2 className="text-[50px] font-headerFont text-center underline text-brand ">
                    sign-up
                  </h2>
                  <p className="text-[25px] font-headerFont text-center text-base">
                    to <br /> your account
                  </p>
                </div>
              </div>
              <div className=" my-10  underline flex flex-col  gap-5">
                <input
                  type="text"
                  placeholder="full name"
                  className=" placeholder:text-stone-300  text-[20px]  p-3 pl-5 text-white rounded-full bg-primaryColor outline-0 input-shadow border-3 border-secondary focus:outline-3 focus:outline-brand "
                  onChange={(e) =>
                    setUserData((prev) => ({
                      ...prev,
                      fullName: e.target.value,
                    }))
                  }
                />

                <input
                  type="email"
                  placeholder="email"
                  className=" placeholder:text-stone-300  text-[20px]  p-3 pl-5 text-white rounded-full bg-primaryColor outline-0 input-shadow border-3 border-secondary focus:outline-3 focus:outline-brand "
                  onChange={(e) =>
                    setUserData((prev) => ({ ...prev, email: e.target.value }))
                  }
                />
                <input
                  type="password"
                  placeholder="password"
                  className="placeholder:text-stone-300 text-[20px]  p-3 pl-5 text-white rounded-full bg-primaryColor outline-0 input-shadow border-3 border-secondary focus:outline-3 focus:outline-brand "
                  onChange={(e) =>
                    setUserData((prev) => ({
                      ...prev,
                      password: e.target.value,
                    }))
                  }
                />
              </div>
              <div className="text-right mb-4">
                <a
                  className="text-xs font-display font-semibold text-gray-100 hover:text-brand cursor-pointer"
                  href="#"
                >
                  Forgot Password?
                </a>
              </div>
              <div className="flex justify-center w-full items-center">
                <div>
                  <button className="flex items-center justify-center py-2 px-20 bg-white cursor-pointer hover:bg-gray-200 focus:ring-blue-500 focus:ring-offset-blue-200 text-gray-700 w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg">
                    <div>
                      <FcGoogle className="text-[25px]" />
                    </div>
                    <span className="ml-2">Sign in with Google</span>
                  </button>
                </div>
              </div>
              <div className="mt-5">
                <button
                  className="py-2 px-4 cursor-pointer bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"
                  type="submit"
                  onClick={handleSignUp}
                >
                  Sign Up
                </button>
              </div>
              <div className="flex items-center justify-between mt-4">
                <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4" />
                <Link
                  to="/signIn"
                  className="text-xs text-gray-100 hover:text-brand  hover:underline"
                >
                  OR SIGN IN
                </Link>
                <span className="w-1/5 border-b dark:border-gray-400 md:w-1/4" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SignUp;
