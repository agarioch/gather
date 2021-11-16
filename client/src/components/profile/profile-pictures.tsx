import React from 'react';
import classNames from 'classnames';
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
  size?: string;
};
export const ProfilePicture = ({ email, style, size = 'small' }: ProfilePictureProps) => {
  const badgeClass = classNames([
    'profile__badge',
    {
      'profile__badge--large': size === 'large',
    },
  ]);
  return (
    <UserContext.Consumer>
      {(users: any) => (
        <div className="profile__wrapper">
          <img
            src={users && users[email] ? users[email].picture : identicon(email)}
            alt="profile"
            className="profile__picture"
            style={style}
          />
          {users[email].role === 'leader' && (
            <span className={badgeClass}>
              <i className="fas fa-certificate fa-sm"></i>
            </span>
          )}
        </div>
      )}
    </UserContext.Consumer>
  );
};
