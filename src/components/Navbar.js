import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <Link to="/">Teams</Link>
      <Link to="/team-stats">Team Stats</Link>
      <Link to="/player-stats">Player Stats</Link>
      <Link to="/teams/:id">Each Team</Link>
    </div>
  );
}

export default Navbar;
