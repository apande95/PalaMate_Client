import React, {useState, useEffect} from "react";
import Spinner from 'react-spinner-material';
import { Link } from 'react-router-dom';



const Players = () => {

    const [players, setPlayers] = useState(null);
    const [search, setSearch] = useState("");
    const [loading, setLoading] = useState(false);

    const getPlayers = async () => {
        setLoading(true);
        const response = await fetch(`http://localhost:5200/player/search/${search}`);
        const data = await response.json();
        setPlayers(data);
        setLoading(false);
    }

    function searchPlayers() {
        getPlayers();
    }



    return (
        <div className="">
    <div className="flex justify-start flex-col items-center">
      <section className="m-4">
        <input
          type="text"
          placeholder="Search for a player"
          value={search}
          onChange={e => setSearch(e.target.value)}
          className="input bg-opacity-50 bg-purple-50 ml-20 border-primary"
        />
        <button className="btn m-5" onClick={searchPlayers}>
          Search
        </button>
      </section>
      <>{players ? (
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr>
                <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Player Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Username
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Player ID
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Portal ID
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Privacy
                </th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {players.map((player) => (
                <tr>
                  <th>
                    <label>
                      <input type="checkbox" className="checkbox" />
                    </label>
                  </th>
                  <td className="">
                  <Link to={`/home/player/${player.player_id}`} key={player.player_id} className="btn">
                    {player.player_name || "Unknown"}
                  </Link>
                    </td>
                  <td>{player.username}</td>
                  <td>{player.portal_id}</td>
                  <td>{player.privacy}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        loading && <div><Spinner /></div>
      )}</>
    </div>
  </div>
    );
}

export default Players;