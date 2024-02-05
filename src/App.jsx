import { useState, useEffect } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import UserContext from "./contexts/UserContext";
import UserList from "./components/UserList";
import searchForArticles from "../api/articles";

function App() {
  const [loggedInUser, setLoggedInUser] = useState({
    username: "tickle122",
    name: "Tom Tickle",
    avatar_url:
      "https://vignette.wikia.nocookie.net/mrmen/images/d/d6/Mr-Tickle-9a.png/revision/latest?cb=20180127221953",
  });
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    searchForArticles(setArticles);
  }, []);

  return (
    <>
      <UserContext.Provider value={{ loggedInUser, setLoggedInUser }}>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Home articles={articles} />} />
          <Route path="/users" element={<UserList />} />
        </Routes>
      </UserContext.Provider>
    </>
  );
}

export default App;
