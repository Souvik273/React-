import { NavLink } from "react-router-dom";

const listOfLinks = [
  {
    to: "/",
    displayText: "Home",
  },
  {
    to: "/about",
    displayText: "About",
  },
  {
    to: "/contact",
    displayText: "Contact",
  },
  {
    to: "/log-in",
    displayText: "Login",
  },
];

function Navbar() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        width: "80%",
        margin: "auto",
      }}>
      {listOfLinks.map((link) => (
        <NavLink key={link.to} to={link.to}>
          {link.displayText}
        </NavLink>))}
    </div>);
}

export default Navbar;

