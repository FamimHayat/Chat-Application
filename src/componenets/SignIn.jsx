import React from 'react'
import { FcGoogle } from 'react-icons/fc'
import { Link } from 'react-router'

const SignIn = () => {
    return (
      <>
        <section className="h-dvh bg-primary flex justify-center items-center ">
          <div className=" relative py-3 bg-secondColor sm:max-w-xl sm:mx-auto scale-[.9]">
            <div className="relative signIn-shadow px-4 py-10 bg-primary border-6 shadow-2xl border-primary outline-4 outline-brand mx-8 md:mx-0  rounded-3xl sm:p-10 ">
              <div className="max-w-md mx-auto">
                <div className="flex items-center space-x-5 justify-center">
                  <div>
                    <h2 className="text-[50px] font-headerFont text-center underline text-brand ">
                      sign-in{" "}
                    </h2>
                    <p className="text-[25px] font-headerFont text-center text-base">
                      to <br /> your account
                    </p>
                  </div>
                </div>
                <div className="my-10  underline flex flex-col  gap-5">
                  <input
                    type="text"
                    placeholder="user name"
                    className="placeholder:text-white text-[20px]  p-3 text-text rounded-full bg-primaryColor outline-0 input-shadow border-3 border-secondary focus:outline-3 focus:outline-brand "
                  />
                  <input
                    type="password"
                    placeholder="password"
                    className="placeholder:text-white text-[20px]  p-3 text-text rounded-full bg-primaryColor outline-0 input-shadow border-3 border-secondary focus:outline-3 focus:outline-brand "
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
                    className="py-2 px-4 bg-blue-600 cursor-pointer hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"
                    type="submit"
                  >
                    Log IN
                  </button>
                </div>
                <div className="flex items-center justify-between mt-4">
                  <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4" />
                  <Link
                    to="/signUp"
                    className="text-xs text-gray-100 hover:text-brand  hover:underline"
                  >
                    OR SIGN UP
                  </Link>
                  <span className="w-1/5 border-b dark:border-gray-400 md:w-1/4" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
}

export default SignIn
