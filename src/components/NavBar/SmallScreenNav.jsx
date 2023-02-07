import NavLinksList from "./NavLinksList"
import { Link } from "react-router-dom"
import Logo from '../../assets/purple-narwhal.png'

const SmallScreenNav = ({ isOpen, handleOpen, user, handleLogout}) => {
  return (
    <div id="nav-container">
      <Link to='/'>
        <img src={Logo} alt="purple narwhal" />
      </Link>
      <div id="nav-right">
        <button onClick={handleOpen}>
          {isOpen ? 'x' : '≡'}
        </button>
        <div id="dropdown">
          {isOpen && <NavLinksList isOpen={isOpen} user={user} handleLogout={handleLogout}/>}
        </div>
      </div>
    </div>
  )
}

export default SmallScreenNav