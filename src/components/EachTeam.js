import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
function EachTeam() {
  const params = useParams();
  const [team, setTeam] = useState([]);
  useEffect(() => {
    fetch("http://127.0.0.1:9292/teams")
      .then((res) => res.json())
      .then((data) => setTeam(data));
  }, []);

  const displayTeam = team.map(
    (team) =>
      Number(params.id) === team.id && (
        <div key={team.id}>
          <h2>{team.name}</h2>
          <h3>{team.city}</h3>
          Players on this team:
          {team.players.map((player) => (
            <div key={player.id}>
              <h4>{player.name}</h4>
              <h5>{player.position}</h5>
              <Link to={`/teams/${params.id}/players/${player.id}`}>
                See Player
              </Link>
            </div>
          ))}
        </div>
      )
  );

  console.log(team);
  return (
    <div>
      EachTeam
      {displayTeam}
    </div>
  );
}

export default EachTeam;
