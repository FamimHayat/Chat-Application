
import Nav from './Nav'
import { Outlet } from 'react-router'

const Layout = () => {
  return (
    <div className='flex flex-col xl:flex-row'>
          <Nav />
          <Outlet/>
    </div>
  )
}

export default Layout
