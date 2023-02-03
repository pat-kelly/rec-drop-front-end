import NavLinksList from "./NavLinksList"

const NavBar = ({ user, handleLogout }) => {
  return (
    <NavLinksList user={user} handleLogout={handleLogout} />
  )
}

export default NavBar
