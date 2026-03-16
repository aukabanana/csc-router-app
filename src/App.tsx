import { NavLink, Outlet } from 'react-router-dom'

export default function App() {
  return (
    <>
      <nav>
        <NavLink to='/' end>Home</NavLink>
        <NavLink to='/about'>About</NavLink>
        <NavLink to='/contact'>Contact</NavLink>
        <NavLink to='/signup'>Sign Up</NavLink>
        <NavLink to='service'>Service</NavLink>
      </nav>

      <h1>Welcome to the Home Page!</h1>
      <Outlet />
    </>
  )
}