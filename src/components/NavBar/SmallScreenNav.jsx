import NavLinksList from "./NavLinksList"

const SmallScreenNav = ({ isOpen, handleOpen, user, handleLogout}) => {
  return (
    <>
      <button onClick={handleOpen}>
        {isOpen ? 'X' : '≡'}
      </button>
      {isOpen && <NavLinksList />}
    </>
  )
}

export default SmallScreenNav