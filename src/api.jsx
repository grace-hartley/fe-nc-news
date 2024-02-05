import axios from "axios";

export const getArticles = async (func) => {
  const response = await axios.get(
    "https://backend-project-nc-news-t9vr.onrender.com/api/articles/"
  );
  func(response.data.articles);
};
