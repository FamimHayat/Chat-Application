
import { Navigate } from 'react-router'
import Nav from './Nav'
import { Outlet } from 'react-router'
import { useSelector } from 'react-redux'
import { reauthenticateWithCredential } from 'firebase/auth'

const Layout = () => {
  const reduxData = useSelector((state) => state.userInfo.userData);

  if (!reduxData) {
     return <Navigate to="/SignIn" />;
  }

  return (
    <div className=' flex flex-col xl:flex-row'>
          <Nav />
          <Outlet/>
    </div>
  )
}

export default Layout
