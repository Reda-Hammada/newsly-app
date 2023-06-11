import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import useUserFromLocalStorage from "../hooks/useUserFromLocalStorage";
import { articlesForVisitor } from "../features/articles/articleSlice";
import { useContext } from "react";
import { AuthContext } from "../App";
import ReusableButton from "./ReusableButton ";
import ReusableArticle from "./ReusableArticle";

const Feed = () => {
  const { updateAuthState } = useContext(AuthContext);

  const { isLoading, articles } = useSelector((state) => state.articles);
  const { isAuthenticated } = useSelector((state) => state.auth || {});
  const user = useUserFromLocalStorage();
  const dispatch = useDispatch();

  // tab to sign up form
  const setSignUp = () => {
    updateAuthState("signUp", true);
  };

  useEffect(() => {
    // if user not authenticated then fetch visitors articles
    if (isAuthenticated === false) {
      dispatch(articlesForVisitor());
    }
    // if user is authenticated then fetch personalized articles for the user
    else if (isAuthenticated === true) {
    }
  }, [isAuthenticated, user]);

  if (isLoading) {
    return (
      <div className="w-full mt-12 text-center text-gray-700 text-[18px] mb-[80%]">
        Loading...
      </div>
    );
    // feed for visitors
  } else if (isAuthenticated === false) {
    return (
      <>
        <section className="w-[85%] mr-auto ml-auto ">
          <div className="flex flex-row flex-wrap w-[100%] mt-12  justify-between">
            {articles.results &&
              articles.results
                .slice(0, 9)
                .map((article, index) => (
                  <ReusableArticle
                    key={index}
                    title={article.title}
                    image={article.multimedia && article.multimedia[0]?.url}
                  />
                ))}
          </div>
        </section>
        <section className="mt-5   text-center w-full mb-12">
          <div onClick={setSignUp}>
            <ReusableButton
              className="bg-red-600 text-white font-bold  w-[100px] hover:bg-red-700  rounded h-[40px] pb-1"
              text="Read more"
            />
          </div>
        </section>
      </>
    );
  }
};

export default Feed;
