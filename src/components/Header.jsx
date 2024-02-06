import Nav from "../components/Nav";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <Link to="/" style={{ textDecoration: "none" }}>
        <h1>NC News</h1>
      </Link>
      <Nav></Nav>
    </header>
  );
};
export default Header;
