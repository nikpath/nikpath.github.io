import "./css/Experience.css";
import achievers_logo from "./icons/achievers_logo.svg";
import achievers_1 from "./icons/achievers_1.jpeg";
import CS_logo from "./icons/CS_logo.svg";
import CS_1 from "./icons/CS_1.png";
import twitter_logo from "./icons/twitter.svg";
import twitter_1 from "./icons/twitter_1.webp";
import grounded_logo from "./icons/grounded_logo.png";
import grounded_1 from "./icons/grounded_1.png";
import pdf from "./static/resume.pdf";

// TODO: move into components
function Experience() {
  return (
    <div className="exp-section">
      <div className="exp-section-header">My recent co-op experience</div>
      <div className="exp-card">
        <div className="exp-number">May - Aug '22</div>
        <div className="exp-card-body">
          <div className="exp-header">
            <div className="exp-logo">
              <img
                className="logo-with-text"
                src={twitter_logo}
                alt="Logo"
                width="50"
                height="50"
              ></img>
              Twitter
            </div>
            <div className="exp-stack">
              <div className="exp-dates">Toronto, ON</div>
              <div>React, Figma API</div>
            </div>
          </div>
          <div className="exp-body">
            <div className="exp-img">
              <img src={twitter_1} alt="Logo" width="350"></img>
            </div>
            <div className="exp-text">
              <p>
                During my time at Twitter I focused on building tools that would
                allow designers to iterate faster on designs. I built a tool
                that scans Figma design files for tweet components and
                auto-fills them with mock data making it faster to produce high
                fidelity mock-ups.
              </p>
              <p>
                Using feedback from designers across all product teams, I then
                improved the tool by adding more functionalities like including
                3 tweet formats, and generating realistic reply, like and
                retweet numbers to further reduce monotonous tasks from the
                designers' workflows.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="exp-section-header">Past projects and experience</div>
      <div className="exp-card">
        <div className="exp-number">Jan - Apr '23</div>
        <div className="exp-card-body">
          <div className="exp-header">
            <div className="exp-logo">
              <img
                className="logo-with-text"
                src={grounded_logo}
                alt="Logo"
                width="50"
                height="50"
              ></img>
              Mechatronics Capstone
            </div>
            <div className="exp-stack">
              <div className="exp-dates">Waterloo, ON</div>
              <div>React Native, C++ (Arduino)</div>
            </div>
          </div>
          <div className="exp-body">
            <div className="exp-img">
              <img src={grounded_1} alt="Logo" width="350"></img>
            </div>
            <div className="exp-text">
              <p>
                For my final year project, we developed sock-like wearables that
                auto-recognize stress symptoms and provide methods for relieving
                stress. This project was then presented to hundreds of people
                and a panel of judges at the UWaterloo Mechatronics Symposium.
              </p>
              <p>
                I developed the mobile app for interacting and controlling the
                wearables in React Native. I designed the app to be clear and
                simplistic for users. I was also in charge of programming the
                wearable devices (ESP32 microcontroller) in C++. This included
                polling the biometric sensor values, communication to the mobile
                app via Bluetooth, and control of the motors in the wearables
                when employing the stress relieving methods.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="exp-card">
        <div className="exp-number">Sept - Dec '21</div>
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
              <div className="exp-dates">Toronto, ON</div>
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
                primarily on improving accessibility in the existing design
                system and production site.
              </p>
              <p>
                I implemented accessibility standards into the in-house
                component library so that any UIs using them would be accessible
                out of the box. I also reworked UI flows to meet ARIA standards
                and ensure that the content could be interacted with through
                keyboards and screen readers. Based on my work with the desktop
                site, I was then put in charge of auditing the mobile site to
                ensure that the more minimal UIs would have thorough labelling
                and enough readable content, so as to provide a good experience
                for all users.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="exp-card">
        <div className="exp-number">Jan - April '21</div>
        <div className="exp-card-body">
          <div className="exp-header">
            <div className="exp-logo">
              <img src={CS_logo} alt="Logo" height="50"></img>
            </div>
            <div className="exp-stack">
              <div className="exp-dates">Toronto, ON</div>
              <div>PHP, JS, SCSS, WordPress</div>
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
                between the Thinkific LMS API and the WordPress client site. The
                function of the tool was to help the site developers add and
                manage data in the backend of the site and also provide
                front-end integrations that the user would use to manage their
                data.
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
