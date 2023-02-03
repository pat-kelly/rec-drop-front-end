import { NavLink } from "react-router-dom";
import Logo from '../../assets/purple-narwhal.png'

const NavLinksList = ({ user, handleLogout }) => {
  return ( 
    <nav>
      {user ?
        <>
          <div id="nav-left">
            <NavLink to='/'>
              <img src={Logo} alt="purple narwhal" />
            </NavLink>
            <NavLink to="/profiles">PROFILES</NavLink>
          </div>
          <div id="nav-right">
            <NavLink to="" onClick={handleLogout}>LOG OUT</NavLink>
          </div>
        </>
      :
        <>
          <div id="nav-left">
            <NavLink to='/'>
              <img src={Logo} alt="put" />
            </NavLink>
          </div>
          <div id="nav-right">
            <NavLink to="/login">LOG IN</NavLink>
            <NavLink to="/signup">SIGN UP</NavLink>
          </div>
        </>
      }
    </nav>
  );
}

export default NavLinksList