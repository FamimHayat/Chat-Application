
import Nav from './Nav'
import { Outlet } from 'react-router'

const Layout = () => {
  return (
    <div className='flex'>
          <Nav />
          <Outlet/>
    </div>
  )
}

export default Layout
