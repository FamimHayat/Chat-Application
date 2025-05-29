
import { BrowserRouter, Route, Routes } from 'react-router'
import Layout from './componenets/layout/Index'
import Home from './pages/Home'
import SignIn from './componenets/SignIn'
import SignUp from './componenets/SignUp'


function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />}/>
          </Route>
          <Route path="/SignIn" element={<SignIn />}/>
          <Route path="/SignUp" element={<SignUp />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App
