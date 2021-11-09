import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import './profile.css';

const Profile: React.FC = () => {
  const { user } = useAuth0();
  if (user) {
    const { name, picture } = user;
    return (
      <div className="profile">
        <img src={picture} alt="profile" className="profile--picture" />
        <p className="profile--name">{name}</p>
      </div>
    );
  } else {
    return <></>;
  }
};

export default Profile;
