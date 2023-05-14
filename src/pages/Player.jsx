import React, {useState, useEffect} from "react";
import { useParams } from 'react-router-dom';
import Spinner from 'react-spinner-material';


const Player = () => {
    const { id } = useParams();
    const [player, setPlayer] = useState({});
    const [status, setStatus] = useState("");
    const [isLoading, setIsLoading] = useState(true);


    useEffect(() => {
        const fetchPlayer = async () => {
          try {
            if (localStorage.getItem(`player:${id}`)){
                return setPlayer(JSON.parse(localStorage.getItem(`player:${id}`)));
            }
            const response = await fetch(`http://localhost:5200/player/${id}`);
            if (response.ok) {
              const data = await response.json();
            setPlayer(data);
            localStorage.setItem(`player:${id}`, JSON.stringify(data));
            } else {
              console.error('Error:', response.status);
            }
          } catch (error) {
            console.error('Error:', error);
          } finally {
            setIsLoading(false);
          }
        };

        const fetchStatus = async () => {
            try {
                const response = await fetch(`http://localhost:5200/player/status/${id}`);
                if (response.ok) {
                    const data = await response.text();
                    console.log(JSON.stringify(data));
                    setStatus(data);
                } else {
                    console.error('Error:', response.status);
                }
            } catch (error) {
                console.error('Error:', error);
            }
        };

        fetchPlayer();
        fetchStatus();
      }, [id]);

    return (
        <div className="w-3/4">
            {isLoading ? (
                <div className="flex justify-center items-center">
                    <Spinner radius={120} color={"#333"} stroke={2} visible={true} />
                </div>
            ) : (
                <div className=" min-h-screen py-8">
                <div className="max-w-3xl mx-auto p-8 rounded-lg shadow-lg">
                    <div className="flex items-center">
                    <img src={player.avatarURL} alt="Avatar" className="w-12 h-12 rounded-full" />
                    <div className="ml-4">
                        <h1 className="text-2xl font-bold text-secondary">{player.name}</h1>
                        <h2 className="text-lg text-gray-500">{player.inGameName}</h2>
                        <h3 className="text-lg text-gray-500">{status}</h3>
                    </div>
                    </div>
                    <div className="mt-8">
                    <h3 className="text-xl font-bold text-secondary">Player Details</h3>
                    <div className="flex flex-wrap mt-4 text-purple-700">
                        <div className="w-full sm:w-1/2 lg:w-1/3">
                        <p className="text-gray-500 mb-2">Player ID</p>
                        <p>{player.id}</p>
                        </div>
                        <div className="w-full sm:w-1/2 lg:w-1/3">
                        <p className="text-gray-500 mb-2">Level</p>
                        <p>{player.level}</p>
                        </div>
                        <div className="w-full sm:w-1/2 lg:w-1/3">
                        <p className="text-gray-500 mb-2">Wins/Losses</p>
                        <p>{player.wins}/{player.losses}</p>
                        </div>
                        <div className="w-full sm:w-1/2 lg:w-1/3">
                        <p className="text-gray-500 mb-2">Hours Played</p>
                        <p>{player.hoursPlayed}</p>
                        </div>
                        <div className="w-full sm:w-1/2 lg:w-1/3">
                        <p className="text-gray-500 mb-2">Platform</p>
                        <p>{player.platform}</p>
                        </div>
                        <div className="w-full sm:w-1/2 lg:w-1/3">
                        <p className="text-gray-500 mb-2">Title</p>
                        <p>{player.title}</p>
                        </div>
                    </div>
                    </div>
                </div>
                </div>)}
        </div>
    );
}

export default Player;