import { useState, useEffect } from "react";
import "./App.scss";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import UserContext from "./contexts/UserContext";
import UserList from "./components/UserList";
import UserCard from "./components/UserCard";
import ArticleCard from "./components/ArticleCard";

function App() {
  const [loggedInUser, setLoggedInUser] = useState({
    username: "tickle122",
    name: "Tom Tickle",
    avatar_url:
      "https://vignette.wikia.nocookie.net/mrmen/images/d/d6/Mr-Tickle-9a.png/revision/latest?cb=20180127221953",
  });

  return (
    <>
      <UserContext.Provider value={{ loggedInUser, setLoggedInUser }}>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/articles/:article_id" element={<ArticleCard />} />
          <Route path="/users" element={<UserList />} />
          <Route path="/users/:username" element={<UserCard />} />
        </Routes>
      </UserContext.Provider>
    </>
  );
}

export default App;
