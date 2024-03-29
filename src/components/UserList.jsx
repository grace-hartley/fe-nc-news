import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { getUsers } from "../api";
import { useContext } from "react";
import UserContext from "../contexts/UserContext";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { loggedInUser, setLoggedInUser } = useContext(UserContext);

  useEffect(() => {
    getUsers().then((users) => {
      setUsers(users);
      setIsLoading(false);
    });
  }, []);

  const changeUser = (user) => {
    setLoggedInUser(user);
  };

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <ul className="user-list">
        {users.map((user) => {
          return (
            <li key={user.username} className="user-item">
              <div className="user-avatar-container">
                <img src={user.avatar_url} alt={`${user.username}'s avatar`} />
              </div>
              <div className="user-info">
                <h3>{user.username}</h3>
                <button
                  className="change-user-button"
                  onClick={() => {
                    changeUser(user);
                  }}
                >
                  Login
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default UserList;
