import NavLinksList from "./NavLinksList"
import { Link } from "react-router-dom"
import Logo from '../../assets/purple-narwhal.png'

const NavBar = ({ user, handleLogout }) => {
  return (
    <div id="nav-container">
      <Link to='/'>
        <img src={Logo} alt="purple-narwhal" />
      </Link>
      <NavLinksList user={user} handleLogout={handleLogout} />
    </div>
  )
}

export default NavBar
