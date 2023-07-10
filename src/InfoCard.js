import "./css/InfoCard.css";
import pdf from "./static/resume.pdf";

function InfoCard(_) {
  return (
    <div className="card">
      <div className="blurb">
        <p className="first">Software engineer</p>
        <p>
          I graduated from Mechatronics Engineering from the University of
          Waterloo in 2023. I’ve had five great internships where I've gained
          experience building full-stack applications and working with a variety
          of languages and frameworks. I'm looking to bring my skills and
          passion for learning to a full-time opportunity where I can grow as a
          software engineer.
        </p>
        <p>Currently seeking full-time opportunities.</p>
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
