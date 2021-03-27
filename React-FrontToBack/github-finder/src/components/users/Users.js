import React from "react";
import UserItem from "./UserItem";
import Spinner from './../layout/Spinner'
import PropTypes from 'prop-types';

const Users = ({users, loading}) => {
  //   state = {
  //     users: [
  //       {
  //         id: "id",
  //         login: "mcaniglia16",
  //         avatar_url: "https://avatars.githubusercontent.com/u/50206147?v=4",
  //         html_url: "https://github.com/mcaniglia16",
  //       },
  //       {
  //         id: 'id',
  //         login: "mojombo",
  //         avatar_url: "https://avatars.githubusercontent.com/u/2?v=4",
  //         html_url: "https://github.com/mojombo"
  //       },
  //       {
  //         id: 'id',
  //         login: "pjhyett",
  //         avatar_url: "https://avatars.githubusercontent.com/u/3?v=4",
  //         html_url: "https://github.com/pjhyett"
  //       }
  //     ],
  //     };

  if(loading){
     return <Spinner />
  } else {
    return (
        <div style={userStyle}>
          {users.map((user) => (
            <UserItem key={user.id} user={user} />
          ))}
        </div>
      );
  }
};

Users.propTypes = {
    users: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired,
}

const userStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gridGap: "1rem",
};

export default Users;
