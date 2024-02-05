import axios from "axios";

const searchForArticles = async (func) => {
  const response = await axios.get(
    "https://backend-project-nc-news-t9vr.onrender.com/api/articles/"
  );
  func(response.data.articles);
};
export default searchForArticles;
