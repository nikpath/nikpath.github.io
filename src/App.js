import "./css/App.css";
import Navbar from "./Navbar";
import InfoCard from "./InfoCard";
import "./css/Park.css";

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
        <div className="copyright">
          <p>&copy; Niki Pathak 2022</p>
        </div>
      </div>
    </div>
  );
}

export default App;
