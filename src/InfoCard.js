import "./css/InfoCard.css";
import pdf from "./static/resume.pdf";

function InfoCard(_) {
  return (
    <div className="card">
      <div className="blurb">
        <p className="first">Aspiring front end engineer.</p>
        <p>
          I'm passionate about building sleek, intuitive and accessible UIs.
          I’ve had five great internships where I’ve developed modern online
          learning experiences, implemented web accessibility on an employee
          engagement platform, and most recently built Figma plugins to help
          designers at Twitter. I'm looking to continue providing inclusive and
          impactful user experiences.
        </p>
        <p>
          Currently seeking full-time opportunities starting post graduation
          2023.
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
