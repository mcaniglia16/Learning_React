import React, { Component } from "react";
import UserItem from "./UserItem";

class Users extends Component {
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

  render() {
    return (
      <div style={userStyle}>
        {this.props.users.map((user) => (
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    );
  }
}

const userStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gridGap: "1rem",
};

export default Users;
