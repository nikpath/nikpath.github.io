import "./css/InfoCard.css";
import pdf from "./static/resume.pdf";

function InfoCard(_) {
  return (
    <div className="card">
      <div className="blurb">
        <p className="first">Software Engineer</p>
        <p>
          I graduated from Mechatronics Engineering from the University of
          Waterloo in 2023. I’ve had five great internships where I've gained
          experience building full-stack applications, from developing modern
          online learning experiences, implementing web accessibility standards
          on desktop and mobile and most recently building design tools at
          Twitter.
        </p>
        <p>
          I'm looking to bring my skills and passion for learning to a full-time
          opportunity where I can continue to grow professionally.
        </p>
      </div>
      <div className="resume">
        <a className="link-button" href={pdf}>
          View Resume
        </a>
      </div>
    </div>
  );
}

export default InfoCard;
