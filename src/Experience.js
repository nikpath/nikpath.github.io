import "./css/Experience.css";
import achievers_logo from "./icons/achievers_logo.svg";
import achievers_1 from "./icons/achievers_1.jpeg";
import CS_logo from "./icons/CS_logo.svg";
import CS_1 from "./icons/CS_1.png";
import pdf from "./static/resume.pdf";

// TODO: move into components
function Experience() {
  return (
    <div className="exp-section">
      <div className="exp-section-header">My recent internship experiences</div>
      <div className="exp-card">
        <div className="exp-number">.01</div>
        <div className="exp-card-body">
          <div className="exp-header">
            <div className="exp-logo">
              <img
                src={achievers_logo}
                alt="Logo"
                width="150"
                height="50"
              ></img>
            </div>
            <div className="exp-stack">
              <div className="exp-dates">Sept - Dec '21</div>
              <div>React, npm, grunt</div>
            </div>
          </div>
          <div className="exp-body">
            <div className="exp-img">
              <img src={achievers_1} alt="Logo" width="350"></img>
            </div>
            <div className="exp-text">
              <p>
                Achievers provides an employee rewards and recognition platform
                for companies looking to create a more incentivized and
                tight-knit culture. During my time as an intern, I focused
                primarily on accessibility.
              </p>
              <p>
                I contributed to the in-house component library to build
                accessibility into custom components so that any UIs using them
                would be accessible out of the box. I also reworked UI flows to
                meet ARIA standards and ensure that the content could be
                interacted with through keyboards and screen readers. I was also
                able to apply my knowledge of accessibility in working with
                designers to ensure that the more minimal, mobile UIs would have
                thorough labelling and enough readable content, so as to provide
                a good experience for all users.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="exp-card">
        <div className="exp-number">.02</div>
        <div className="exp-card-body">
          <div className="exp-header">
            <div className="exp-logo">
              <img src={CS_logo} alt="Logo" height="50"></img>
            </div>
            <div className="exp-stack">
              <div className="exp-dates">Jan - April '21</div>
              <div>PHP, SCSS, JS, WordPress</div>
            </div>
          </div>
          <div className="exp-body">
            <div className="exp-img">
              <img src={CS_1} alt="Logo" width="350"></img>
            </div>
            <div className="exp-text">
              <p>
                Course Studio builds sites for creators to sell, launch and
                manage online courses. My role was to build an integration tool
                between the third-party course-hosting platform and the
                WordPress site that the clients would use. The function of the
                tool was to help the site developers add and manage data in the
                backend of the site and also provide front-end integrations that
                the client would use to manage their data.
              </p>
              <p>
                Working for a start-up was a unique experience, I got to define
                a lot of the project functions and goals as I went along. I
                adopted the role of designer and developer for this project so I
                had to think in terms of what an end-user would want to be able
                to do with their data as well as think as a site developer and
                what data and fields they might need access to based on the
                clients needs.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="exp-more">
        <a className="link-button" href={pdf}>
          Check out my resume for more!
        </a>
      </div>
    </div>
  );
}

export default Experience;
