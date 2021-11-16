import React from 'react';
import { UserContext } from '../../App';

const TYPE: string = 'adventurer';

function identicon(identifier: string): string {
  return `https://avatars.dicebear.com/api/${TYPE}/${
    identifier || 'Anon'
  }.svg?backgroundColor=%23c7d2fe`;
}

type ProfilePictureProps = {
  email: string;
  style?: { [key: string]: string | number };
};
export const ProfilePicture = ({ email, style }: ProfilePictureProps) => (
  <UserContext.Consumer>
    {(value: any) => (
      <img
        src={value && value[email] ? value[email].picture : identicon(email)}
        alt="profile"
        className="profile__picture"
        style={style}
      />
    )}
  </UserContext.Consumer>
);
