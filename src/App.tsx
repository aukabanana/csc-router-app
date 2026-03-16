import { NavLink, Outlet } from 'react-router-dom'

export default function App() {
  return (
    <>
      <nav>
        <NavLink to='/' end>Home</NavLink>
        <NavLink to='/about'>About</NavLink>
        <NavLink to='/contact'>Contact</NavLink>
      </nav>

      <h1>Welcome to the Home Page!</h1>
      <Outlet />
    </>
  )
}