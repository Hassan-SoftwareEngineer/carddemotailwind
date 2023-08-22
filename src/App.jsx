import React from 'react';
import UserCard from './components/UserCard';



function App() {
  return (
    <div className="flex justify-center items-center h-screen  bg-dark gap-5 flex-wrap">
      <UserCard
        avatarSrc="https://img.freepik.com/free-icon/user_318-159711.jpg"
        userName="Johnny's cash"
        twitterUsername="@degenjohndoe"
        followerCount={545}
      />
      <UserCard
        avatarSrc="https://img.freepik.com/free-icon/user_318-159711.jpg"
        userName="Sheraz"
        twitterUsername="@sherazhassan"
        followerCount={345}
      />

      <UserCard
        avatarSrc="https://img.freepik.com/free-icon/user_318-159711.jpg"
        userName="Johnny's cash"
        twitterUsername="@degenjohndoe"
        followerCount={986}
      />
    </div>

  );
}

export default App;
