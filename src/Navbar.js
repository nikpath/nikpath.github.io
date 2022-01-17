import "./css/Navbar.css";
import SocialPanel from "./SocialPanel";
import logo from "./icons/logoNP.svg";

/* <div className="logo-n">
        N<span className="logo-p">P</span>
      </div> */
function Navbar(props) {
  return (
    <div className="bar">
      <img
        src={logo}
        className="logo"
        alt="Email me"
        width="75"
        height="60"
      ></img>
      <SocialPanel />
    </div>
  );
}

export default Navbar;
