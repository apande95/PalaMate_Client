import React from "react";
import Sidebar from "../components/Sidebar";
import Intro from "./Intro.jsx";
import { Outlet } from "react-router-dom";
import { FaUser, FaClipboardList, FaMedal, FaWindowRestore, FaCloud } from 'react-icons/fa';

const Home = () => {

    const sidebarLinks = [
        { to: 'players', text: 'Players', icon: <FaUser /> },
        { to: 'matches', text: 'Matches', icon: <FaClipboardList /> },
        { to: 'champions', text: 'Champions', icon: <FaMedal /> },
        { to: 'modal', text: 'Modal', icon: <FaWindowRestore /> },
        { to: 'weather', text: 'Weather', icon: <FaCloud /> },
      ];

    return (
        <div className="flex flex-row">
            <div className=""><Sidebar sidebarLinks={sidebarLinks}/></div>
            <div className="w-7/8 flex justify-center"><Outlet /></div>
        </div>
    );
}

export default Home;