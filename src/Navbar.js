import "./css/Navbar.css";
import SocialPanel from "./SocialPanel";
import logo from "./icons/logoNP.svg";

function Navbar(props) {
  return (
    <header className="bar">
      <img src={logo} className="logo" alt="Logo" width="50" height="50"></img>
      <SocialPanel />
    </header>
  );
}

export default Navbar;
