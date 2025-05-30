import React from 'react'

const SignIn = () => {
  return (
    <>
      <section className="h-dvh flex items-center ">
        <div className="container">
          <div className="flex justify-center ">
            <form className="">
              <div className="flex flex-col items-center gap-15">
                <div className='bg-stone-400 w-full mx-auto'>
                  <h2>sign in</h2>
                  <p>
                    to <br /> your account
                  </p>
                </div>
                <div className="flex flex-col gap-3 bg-stone-400">
                  <div className="flex gap-5">
                    <input
                      className="input-css"
                      type="text"
                      placeholder="first name"
                    />
                    <input
                      className="input-css"
                      type="text"
                      placeholder="last name"
                    />
                  </div>
                  <input
                    className="input-css"
                    type="email"
                    placeholder="email"
                  />
                  <input
                    className="input-css"
                    type="number"
                    placeholder="number"
                  />
                  <input
                    className="input-css"
                    type="password"
                    placeholder="password"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default SignIn
