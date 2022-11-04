import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Teams() {
  const [teams, setTeams] = useState([]);
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [image, setImage] = useState("");
  useEffect(() => {
    fetch("http://127.0.0.1:9292/teams")
      .then((res) => res.json())
      .then((data) => setTeams(data));
  }, []);
  const addTeam = async (e) => {
    e.preventDefault();

    const res = await fetch("http://127.0.0.1:9292/teams", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        city: city,
        image: image,
      }),
    });
    const data = await res.json();
    setTeams(data);
  };

  const AddTeamForm = (
    <div>
      <label>Team Name</label>
      <input
        type="text"
        name="name"
        onChange={(e) => setName(e.target.value)}
        value={name}
      />
      <label>Team City</label>
      <input
        type="text"
        name="city"
        onChange={(e) => setCity(e.target.value)}
        value={city}
      />

      <label>Team Image</label>
      <input
        type="text"
        name="image"
        onChange={(e) => setImage(e.target.value)}
        value={image}
      />
      <button type="button" onClick={addTeam}>
        Add Team
      </button>
    </div>
  );
  const displayTeams = teams.map((team) => (
    <div key={team.id}>
      <h2>{team.name}</h2>
      <Link to={`/teams/${team.id}`}>See Team</Link>
    </div>
  ));

  return (
    <div>
      {displayTeams}
      form
      {AddTeamForm}
    </div>
  );
}

export default Teams;
