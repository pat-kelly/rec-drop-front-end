import { NavLink } from "react-router-dom";

const NavLinksList = ({ user, handleLogout, isOpen }) => {
  return ( 
    <nav className={isOpen ? 'open-dropdown' : ''}>
      {user ?
        <>
          <div id="nav-left">
            <NavLink to='/recs'>RECS</NavLink>
            <NavLink to='/rec/new'>NEW REC</NavLink>
            <NavLink to={`/profile/${user.profile}`}>MY PROFILE</NavLink>
          </div>
          <div id="nav-right">
            <NavLink to="/logout" onClick={handleLogout} className={isOpen ? 'logout-button' : ''}>LOG OUT</NavLink>
          </div>
        </>
      :
        <>
          <div id="nav-left">
            <NavLink to='/recs'>RECS</NavLink>
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