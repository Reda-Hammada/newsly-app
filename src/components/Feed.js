import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import useUserFromLocalStorage from "../hooks/useUserFromLocalStorage";
import { articlesForVisitor } from "../features/articles/articleSlice";
import ReusableArticle from "./ReusableArticle";

const Feed = () => {
  const { isLoading, articles } = useSelector((state) => state.articles);
  const user = useUserFromLocalStorage();
  const dispatch = useDispatch();

  useEffect(() => {
    // if user not authenticated then fetch visitors articles
    if (user === null) {
      dispatch(articlesForVisitor());
    }
    // if user is authenticated then fetch personalized articles for the user
    else {
    }
  }, []);

  if (isLoading) {
    return <div className="w-full text-center">Looading</div>;
  } else {
    return (
      <section>
        <div>
          {articles.articles &&
            articles.articles.map((article, index) => (
              <div key={index}>
                <ReusableArticle
                  title={article.title}
                  image={article.urlToImage}
                />
              </div>
            ))}
        </div>
      </section>
    );
  }
};

export default Feed;
