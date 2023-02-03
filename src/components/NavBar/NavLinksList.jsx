import { NavLink } from "react-router-dom";

const NavLinksList = ({ user, handleLogout }) => {
  return ( 
    <nav>
      {user ?
        <>
          <p>Welcome, {user.name}</p>
          <NavLink to="/profiles">Profiles</NavLink>
          <NavLink to="" onClick={handleLogout}>LOG OUT</NavLink>
          <NavLink to="/change-password">Change Password</NavLink>
        </>
      :
        <>
          <NavLink to="/login">Log In</NavLink>
          <NavLink to="/signup">Sign Up</NavLink>
        </>
      }
    </nav>
  );
}

export default NavLinksList