import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import './profile.css';
import { ProfilePicture } from './profile-pictures';

const Profile: React.FC = () => {
  const { user } = useAuth0();
  if (user) {
    return (
      <div className="profile">
        <ProfilePicture email={user?.email || 'anon'} />
      </div>
    );
  } else {
    return <div className="profile"> </div>;
  }
};

export default Profile;
