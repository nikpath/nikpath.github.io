import "./css/InfoCard.css";
import pdf from "./static/resume.pdf";
import Arrow from "./Arrow";
// import location from "./icons/location.svg";
// import graduationcap from "./icons/graduation-cap.svg";

function InfoCard(_) {
  return (
    <div className="card">
      <div className="blurb">
        <p className="first">
          Aspiring software engineer with an interest in UI/UX.
        </p>
        <p>
          I love building intuitive, sleek and accessible UIs with React. I’ve
          had four great internships where I’ve done everything from developing
          modern{" "}
          <a href="https://course.studio/">online learning experiences</a> to
          implementing web accessibility on an{" "}
          <a href="https://www.achievers.com/company/">
            employee engagement platform.
          </a>{" "}
          I’m looking to continue expanding my horizons and making an impact.
        </p>
        <p>Currently seeking internship opportunities May-Aug 2022.</p>
        <div className="resume">
          <a className="link-button" href={pdf}>
            View Resume
          </a>
        </div>
      </div>
    </div>
  );
}

export default InfoCard;
