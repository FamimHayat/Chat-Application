import React from "react";

const Error404 = () => {
  return (
    <>
      <div className="h-dvh flex justify-center items-center ">
        <h1 className="underline  text-[70px] font-headerFont error-text ">
          <span className=" error404-css italic ">404</span> not found{" "}
          <span className="text-[45px]">...</span>
        </h1>
      </div>
    </>
  );
};

export default Error404;
