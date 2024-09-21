
import { Outlet } from 'react-router-dom'
import UserContextProvider from '../Context/UserContextProvider';

const Layout = () => {
  return (
    <UserContextProvider>
        <Outlet />
    </UserContextProvider>
  )
}

export default Layout;