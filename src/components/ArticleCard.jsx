import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getArticleByID } from "../api";
import { parseISO, format } from "date-fns";

const ArticleCard = () => {
  const [articleCard, setArticleCard] = useState({});
  const { article_id } = useParams();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (article_id) {
      getArticleByID(article_id).then((article) => {
        setArticleCard(article);
        setIsLoading(false);
      });
    }
  }, []);

  const formatDate = (dateStr) => {
    if (!dateStr) {
      return "";
    }
    const parsedDate = parseISO(dateStr);
    return format(new Date(parsedDate), "MMMM dd, yyyy");
  };

  if (isLoading) {
    return <p>Loading...</p>;
  }
  return (
    <>
      <section className="article-card">
        <div className="article-img-container">
          <img
            className="article-img"
            src={articleCard.article_img_url}
            alt={`Image for post titled: "${articleCard.title}"`}
          />
        </div>
        <div className="article-details">
          <p>{formatDate(articleCard.created_at)}</p>
          <h4>{articleCard.author}</h4>
          <h3>{articleCard.title}</h3>
          <p>{articleCard.body}</p>
        </div>
        <div className="article-votes">
          <p>votes: {articleCard.votes}</p>
          <button>👍</button>
        </div>
      </section>
      <section></section>
    </>
  );
};
export default ArticleCard;
