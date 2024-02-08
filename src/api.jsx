import axios from "axios";

export const getArticles = () => {
  return axios
    .get("https://backend-project-nc-news-t9vr.onrender.com/api/articles/")
    .then((response) => {
      return response.data.articles;
    });
};

export const getArticleByID = (id) => {
  return axios
    .get(`https://backend-project-nc-news-t9vr.onrender.com/api/articles/${id}`)
    .then((response) => {
      return response.data.article;
    });
};

export const getArticleComments = (id) => {
  return axios
    .get(
      `https://backend-project-nc-news-t9vr.onrender.com/api/articles/${id}/comments`
    )
    .then((response) => {
      return response.data.comments;
    });
};

export const getTopics = () => {
  return axios
    .get("https://backend-project-nc-news-t9vr.onrender.com/api/topics/")
    .then((response) => {
      return response.data.topics;
    });
};

export const getUsers = () => {
  return axios
    .get("https://backend-project-nc-news-t9vr.onrender.com/api/users/")
    .then((response) => {
      return response.data.users;
    });
};

export const patchArticleVotes = (id, newVotes) => {
  return axios
    .patch(
      `https://backend-project-nc-news-t9vr.onrender.com/api/articles/${id}`,
      { inc_votes: newVotes }
    )
    .then((response) => {
      return response.data.article;
    });
};
