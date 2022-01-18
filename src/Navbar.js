import "./css/Navbar.css";
import SocialPanel from "./SocialPanel";
import logo from "./icons/logoNP.svg";

function Navbar(props) {
  return (
    <div className="bar">
      <img src={logo} className="logo" alt="Logo" width="50" height="50"></img>
      <SocialPanel />
    </div>
  );
}

export default Navbar;
