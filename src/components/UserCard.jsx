import React from 'react';
import twitterIcon from '../assets/twitterIcon.svg'
const UserCard = ({ avatarSrc, userName, twitterUsername, followerCount }) => {
  return (
    <div className="w-300 h-200 bg-dark rounded-xl shadow-md overflow-hidden">
      <div className="flex flex-col  p-8">
        <img
          className="h-10 w-10 object-cover mb-4"
          src={avatarSrc}
          alt="User Avatar"
        />
        <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
          {userName}
        </div>
        <div className="flex items-center mt-1">
          <img
            className="h-4 w-4 text-blue-500 mr-1"
            src={twitterIcon}
            alt="Twitter Icon"
          />
        
          <p className="text-gray-500">{twitterUsername}</p>
        </div>
        <div className="flex items-center mt-4">
          <p className="text-gray-500">{followerCount} Followers</p>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
