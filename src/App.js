import "./css/App.css";
import Navbar from "./Navbar";
import InfoCard from "./InfoCard";
import "./css/Park.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
      </header>
      <div className="main-section">
        <div className="left-section">
          <div className="name-section">
            Hi, I'm
            <span className="name"> Niki</span>.
          </div>
        </div>
        <div className="right-section">
          <InfoCard />
        </div>
      </div>
      <div className="ani-section">
        <div className="container">
          <p>&copy; Niki Pathak 2022</p>
        </div>
      </div>
    </div>
  );
}

export default App;
