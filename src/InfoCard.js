import "./css/InfoCard.css";
import pdf from "./static/resume.pdf";
import location from "./icons/location.svg";
import graduationcap from "./icons/graduation-cap.svg";

function InfoCard(props) {
  return (
    <div className="card">
      <div className="blurb">
        <p className="first">
          Aspiring software developer with an interest in front-end. I love
          building intuitive, sleek and accessible UIs with React.
        </p>
        <p>
          I’ve had four great internships where I’ve done everything from
          developing modern{" "}
          <a href="https://course.studio/">online learning experiences</a> to
          implementing web accessibility on an{" "}
          <a href="https://www.achievers.com/company/">
            employee engagement platform.
          </a>{" "}
          I’m looking to continue expanding my horizons and making an impact.
        </p>
        <p>Currently seeking internship opportunities May-Aug 2022.</p>
        <div className="resume">
          Check out my
          <a href={pdf}> resume </a>for more details.
        </div>
        <p className="footer">
          <div className="tag">
            <img src={location} alt="location" width="24" height="24" />
            University of Waterloo, Waterloo, ON
          </div>
          <div className="tag">
            <img src={graduationcap} alt="graduating" width="24" height="24" />
            Expected 2023, Mechatronics Engineering
          </div>
        </p>
      </div>
    </div>
  );
}

export default InfoCard;
