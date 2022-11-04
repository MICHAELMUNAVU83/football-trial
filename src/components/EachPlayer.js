import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function EachPlayer() {
  const params = useParams();
  const [player, setPlayer] = useState([]);

  const [goals, setGoals] = useState("");
  const [assists, setAssists] = useState("");

  useEffect(() => {
    fetch("http://127.0.0.1:9292/players")
      .then((res) => res.json())
      .then((data) => setPlayer(data));
  }, []);

  const updatePlayer = async (e) => {
    e.preventDefault();
    fetch(`http://127.0.0.1:9292/players/${params.id}`, {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        goals: goals,
        assists: assists,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        setPlayer(data);
        setGoals("");
        setAssists("");
      });
  };

  const displayPlayer = player.map(
    (player) =>
      Number(params.id) === player.id && (
        <div key={player.id}>
          <h2>{player.name}</h2>
          <h3>{player.position}</h3>
          goals scored: {player.goals}
          goals assisted: {player.assists}
        </div>
      )
  );

  const updatePlayerForm = (
    <div>
      <input
        type="number"
        name="goals"
        placeholder="goals"
        onChange={(e) => setGoals(e.target.value)}
        value={goals}
      />
      <input
        type="number"
        name="assists"
        placeholder="assists"
        onChange={(e) => setAssists(e.target.value)}
        value={assists}
      />
      <button type="button" onClick={updatePlayer}>
        Update Player
      </button>
    </div>
  );

  return (
    <div>
      EachPlaye
      {displayPlayer}
      {updatePlayerForm}
    </div>
  );
}

export default EachPlayer;
