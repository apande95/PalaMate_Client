import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = ({sidebarLinks}) => {
  return (
    <div className="h-auto w-fit">
      <div className="px-6 py-4">
        <ul>
        {sidebarLinks.map((link) => (
          <li key={link.to} className="m-4">
            <div className="tooltip tooltip-right" data-tip={link.text}>
            <Link to={link.to} className="btn hover:bg-secondary flex flex-col items-center">
                <span className="text-2xl">
                {link.icon}
                </span>
            </Link>
            </div>
          </li>
        ))} 
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
