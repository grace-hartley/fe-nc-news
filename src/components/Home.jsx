import ArticleList from "./ArticleList";

const Home = ({ articles }) => {
  return (
    <>
      <h2>Today's latest articles</h2>
      <ArticleList articles={articles} />
    </>
  );
};

export default Home;
