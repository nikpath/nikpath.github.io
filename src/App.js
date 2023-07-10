import "./css/App.css";
import Navbar from "./Navbar";
import Arrow from "./Arrow";
import InfoCard from "./InfoCard";
import Experience from "./Experience";

function App() {
  return (
    <div className="app">
      <Navbar />
      <div className="content">
        <div className="main-section">
          <div className="intro">Hi, I'm</div>
          <div className="name">Niki Pathak</div>
          <InfoCard />
        </div>
        <Experience />
      </div>
      <div className="arrow">
        <Arrow />
      </div>
      <div className="copyright">
        <p>&copy; Niki Pathak 2023</p>
      </div>
    </div>
  );
}

export default App;
