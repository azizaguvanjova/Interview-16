import React, { useState } from "react";

function App() {
  const PLAYERS = [
    "Ali",
    "Namık",
    "Eda",
    "Ebru",
    "Suzan",
    "Samet",
    "Engin",
    "Halit",
  ];

  return <FormTeams players={PLAYERS} />;
}

const FormTeams = ({ players }) => {
  const [remaingPlayers, setRemainingPlayers] = useState(players);
  const [team1, setTeam1] = useState([]);
  const [team2, setTeam2] = useState([]);
  const [activeTeam, setActiveTeam] = useState(1);

  const handleAddPlayer = (player) => {
    setRemainingPlayers((prev) => prev.filter((name) => name !== player));
    if (activeTeam === 1) {
      setTeam1((prev) => [...prev, player]);
    } else {
      setTeam2((prev) => [...prev, player]);
    }
  };

  const shuffleTeams = () => {
    const allPlayers = [...team1, ...team2];
    const shuffledPlayers = allPlayers.sort(() => Math.random() - 0.5);
    const mid = Math.ceil(shuffledPlayers.length / 2);
    setTeam1(shuffledPlayers.slice(0, mid));
    setTeam2(shuffledPlayers.slice(mid));
  };

  const resetTeams = () => {
    setRemainingPlayers(players);
    setTeam1([]);
    setTeam2([]);
  };

  return (
    <div className="text-center">
      <div className="my-10">
        {remaingPlayers.length === 0
          ? "oyuncu kalmadı"
          : remaingPlayers.map((player, index) => (
              <div
                key={index}
                className="mr-2 cursor-pointer p-2 display inline-block"
                onClick={() => handleAddPlayer(player)}
              >
                {player}
              </div>
            ))}
      </div>
      <hr />
      <div className="my-10">
        <button
          className="mr-5 border border-black p-3 bg-slate-500"
          onClick={() => setActiveTeam((prev) => (prev === 1 ? 2 : 1))}
        >
          {remaingPlayers.length === 0 ? (
            "seçim yapliamaz"
          ) : (
            <p>
              Şu anda <span className="text-red-950"> Takim {activeTeam}</span>{" "}
              için seçim yapilyor
            </p>
          )}
        </button>
        <button
          className="mr-[20px] border border-black p-3 bg-slate-500"
          onClick={shuffleTeams}
        >
          {" "}
          Karıştır
        </button>
        <button
          className="mr-[20px] border border-black p-3 bg-slate-500"
          onClick={resetTeams}
        >
          {" "}
          Sıfırla
        </button>
      </div>
      <hr />
      <div className=" mt-4 ">
        <div>
          <h2 className="font-bold">Team1</h2>
          {team1.map((player, index) => (
            <p
              key={index}
              className="mr-2 cursor-pointer p-2 display inline-block"
            >
              {player}
            </p>
          ))}
        </div>

        <br />
        <div>
          <h2 className="font-bold">Team2</h2>
          {team2.map((player, index) => (
            <p
              key={index}
              className="mr-2 cursor-pointer p-2 display inline-block"
            >
              {player}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
