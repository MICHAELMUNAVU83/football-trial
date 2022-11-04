import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Teams from "./components/Teams";
import TeamStats from "./components/TeamStats";
import PlayerStats from "./components/PlayerStats";
import EachTeam from "./components/EachTeam";
import EachPlayer from "./components/EachPlayer";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Teams />} />
        <Route path="/team-stats" element={<TeamStats />} />
        <Route path="/player-stats" element={<PlayerStats />} />
        <Route path="/teams/:id" element={<EachTeam />} />
        <Route path="/teams/:id/players/:id" element={<EachPlayer />} />
      </Routes>
    </Router>
  );
}

export default App;
