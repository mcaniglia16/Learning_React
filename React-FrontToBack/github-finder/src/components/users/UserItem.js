import React from "react";
import PropTypes from 'prop-types'

const UserItem = ({user: {login, avatar_url, html_url}}) => {
//the state that includes a single user
// state = {
//     id: 'id',
//     login: "mcaniglia16",
//     avatar_url: "https://avatars.githubusercontent.com/u/50206147?v=4",
//     html_url: "https://github.com/mcaniglia16"
// };

//   const { login, avatar_url, html_url } = props.user; //we passed in a "user" prop from Users.js
  return (
    <div className="card text-center">
      <img
        src={avatar_url}
        className="round-img"
        style={{ width: "60px" }}
      ></img>
      <h3>{login}</h3>
      <div>
        <a href={html_url} className="btn btn-dark btn-sm my-1">
          More
        </a>
      </div>
    </div>
  );
};

UserItem.propTypes = {
    user: PropTypes.object.isRequired
}

export default UserItem;
