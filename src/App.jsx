import { BrowserRouter, Route, Routes } from "react-router";
import Layout from "./componenets/layout/Index";
import Home from "./pages/Home";
import SignIn from "./componenets/SignIn";
import SignUp from "./componenets/SignUp";

import Error404 from "./pages/Error404";
import UserProfile from "./pages/UserProfile";

import GroupPage from "./pages/GroupPage"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/myProfile" element={<UserProfile />} />
            <Route path="/groups" element={<GroupPage />} />
          </Route>
          <Route path="/SignIn" element={<SignIn />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
