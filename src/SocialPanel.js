import "./css/SocialPanel.css";
import email from "./icons/email.svg";
import linkedin from "./icons/linkedin.svg";
import github from "./icons/github.svg";
import codepen from "./icons/codepen.svg";
import instagram from "./icons/instagram.svg";
import twitter from "./icons/twitter_soc.svg";

function SocialPanel(props) {
  return (
    <div className="panel">
      <a href="mailto:a9pathak@uwaterloo.ca">
        <img
          src={email}
          className="icon"
          alt="Email me"
          // width="32"
          // height="32"
        />
      </a>
      <a href="https://www.linkedin.com/in/niki-pathak-101a94170/">
        <img
          src={linkedin}
          className="icon"
          alt="Linkedin"
          // width="32"
          // height="32"
        />
      </a>
      <a href="https://github.com/nikpath">
        <img
          src={github}
          className="icon"
          alt="Github"
          // width="32"
          // height="32"
        />
      </a>
      <a href="https://codepen.io/nikpath">
        <img
          src={codepen}
          className="icon"
          alt="Codepen"
          // width="32"
          // height="32"
        />
      </a>
      <a href="https://www.instagram.com/nikpath18/">
        <img
          src={instagram}
          className="icon"
          alt="Instagram"
          // width="32"
          // height="32"
        />
      </a>
      <a href="https://twitter.com/y2kaikai">
        <img
          src={twitter}
          className="icon"
          alt="twitter"
          // width="32"
          // height="32"
        />
      </a>
    </div>
  );
}

export default SocialPanel;
