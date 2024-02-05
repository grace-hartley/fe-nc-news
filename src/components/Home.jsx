import ArticleList from "./ArticleList";

const Home = ({ articles }) => {
  return (
    <>
      <h2>Top Articles</h2>
      <ArticleList articles={articles} />
    </>
  );
};

export default Home;
