import "./NavBar.css"
import {  NavLink } from "react-router-dom"
const NavBar = () => {
  return (
    <nav>
        {/* <Link to="/">Home</Link>
        <Link to="/about">About</Link> */}
        <NavLink 
        // className={({isActive}) => (isActive ? "ativo" : "nao-ativo")} 
        to="/">Home</NavLink>
        <NavLink to="/about">Sobre</NavLink>
        
    </nav>
  )
}

export default NavBar