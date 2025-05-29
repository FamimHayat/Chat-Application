import React from "react";
import { Link } from "react-router";

const Nav = () => {
  return (
    <nav>
      <ul className="m-5">
        <li className="w-fit text-[25px] font-semibold hover:underline">
          <Link to="/">Home</Link>
        </li>
        <li className="w-fit text-[25px] font-semibold hover:underline">
          <Link to="/SignIn">SignIn</Link>
        </li>
        <li className="w-fit text-[25px] font-semibold hover:underline">
          <Link to="/SignUp">SignUp</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
