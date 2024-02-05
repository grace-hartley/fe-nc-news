import { useContext } from "react";
import UserContext from "../contexts/UserContext";
import { Link } from "react-router-dom";

const Nav = () => {
  const { loggedInUser } = useContext(UserContext);
  return (
    <div>
      <nav>
        <Link to="/users">
          <button>Change User</button>
        </Link>
        <Link to={`/users/${loggedInUser.username}`}>
          <button className="user-profile-button">
            <p>{loggedInUser.username}</p>
            <img
              src={loggedInUser.avatar_url}
              alt={`avatar image for ${loggedInUser.username}`}
              className="avatar"
            />
          </button>
        </Link>
      </nav>
    </div>
  );
};

export default Nav;
