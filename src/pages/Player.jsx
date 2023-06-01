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
         try {
        fetchPlayer();
        fetchStatus();
            } catch (error) {
        console.error('Error:', error);
        } finally {
        setIsLoading(false);
        }
        }, [id]);

    return (
        <>
        <div className="flex justify-between">
            <>{isLoading ? (
                <div className="w-2/5">
                    <Spinner radius={120} color={"#333"} stroke={2} visible={true} />
                </div>
            ) : ( 
                <PlayerCard player={player} status={status} />
                )}</>
        </div>

        {/* Button group  */}
        </>
    );
}


function PlayerCard({player, status}){
    return <>
    <div className=" min-h-screen ml-0">
    <div className="card w-96 bg-base-150 shadow-xl max-w-3xl mx-auto p-2 rounded-lg">
        <div className="flex items-center">
        <div className="avatar"><img src={player.avatarURL} alt="Avatar" className="rounded-full w-7" /></div>
        <div className="ml-4">
            <h1 className="text-2xl font-bold text-secondary">{player.name}</h1>
            <h2 className="text-lg text-gray-500">{player.inGameName}</h2>
            <div className={`${status === "online" ? "bg-green-500" : "bg-gray-500"} rounded-md flex justify-center`}>
            <p className="text-white text-sm px-2 py-1">{status}</p>
            </div>
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
        <div className="btn-group justify-center mt-5">
        <button className="btn btn-active">Friends</button>
        <button className="btn">Matches</button>
    </div>
    </div>
    </div>
    </>
}

export default Player;