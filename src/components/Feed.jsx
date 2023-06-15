import { useEffect, useState, useContext } from "react";
import { useSelector, useDispatch } from "react-redux";
import useUserFromLocalStorage from "../hooks/useUserFromLocalStorage";
import {
  articlesForVisitor,
  personalizedFeed,
} from "../features/articles/articleSlice";
import { AuthContext } from "../App";
import ReusableButton from "./ReusableButton ";
import ReusableArticle from "./ReusableArticle";
import { useNavigate } from "react-router-dom";
import filter from "../assets/images/filter.png";
import FilterPoPUp from "./form/FilterPopup";
import { fetchUserPerefences } from "../features/preferences/preferencesSlice";

const Feed = () => {
  const { updateAuthState } = useContext(AuthContext);

  const navigate = useNavigate();

  const { preferences } = useSelector((state) => state.preferences);

  const { isLoading, articles, isSearchAndFilter, isPersonalizedFeed } =
    useSelector((state) => state.articles);

  const { isAuthenticated } = useSelector((state) => state.auth || {});

  const user = useUserFromLocalStorage();

  const dispatch = useDispatch();

  const [PrefSetting, showPrefSetting] = useState(false);

  // tab to sign up form
  const setSignUp = () => {
    updateAuthState("signUp", true);
  };

  // to navigate and pass article data to the article page
  const handleArticleClick = (article) => {
    navigate("/Article", { state: { article } });
  };

  useEffect(() => {
    if (isAuthenticated === false) {
      dispatch(articlesForVisitor());
    }
  }, [isAuthenticated, dispatch]);

  useEffect(() => {
    if (isAuthenticated === true) {
      dispatch(fetchUserPerefences());
    }
  }, [isAuthenticated, dispatch]);

  useEffect(() => {
    if (isAuthenticated === true && preferences.length > 0) {
      dispatch(personalizedFeed(preferences));
    }
  }, [isAuthenticated, preferences, dispatch]);

  if (isAuthenticated === true && preferences.length === 0) {
    return (
      <>
        <section className="w-[96%] mr-auto ml-auto">
          {preferences.length > 0 ? null : <FilterPoPUp />}
          <div>
            <div className="ml-12 mt-12">
              <p className="inline font-bold text-xl">FOR YOU </p>
              <img
                className="w-[30px] mb-1 ml-3  inline"
                src={filter}
                alt="filter icond"
              />
              <p className=" text-[17px]">Best of what interests you</p>
            </div>
          </div>
        </section>
      </>
    );
  } else if (isAuthenticated === true) {
    // feed for authenticated users
    if (isSearchAndFilter === true) {
      return (
        // feed by search and filter
        <div>
          {isLoading ? (
            <div className="w-full mt-12 text-center text-gray-700 text-[18px] mb-[80%]">
              Loading...
            </div>
          ) : (
            <section className="w-[96%] mr-auto ml-auto">
              {PrefSetting === true ? <FilterPoPUp /> : null}
              <div>
                <div className="ml-12 mt-12">
                  <p className="inline font-bold text-xl">FOR YOU </p>
                  <img
                    onClick={() => {
                      showPrefSetting(true);
                    }}
                    className="w-[30px] mb-1 ml-3  inline"
                    src={filter}
                    alt="filter icond"
                  />
                  <p className=" text-[17px]">Best of what interests you</p>
                </div>
              </div>
              <div className="flex flex-row flex-wrap w-[100%] mt-6  justify-evenly">
                {articles.articles &&
                  articles.articles
                    .filter((article) => article.urlToImage !== null)
                    .map((article, index) => (
                      <div
                        onClick={() => handleArticleClick(article)}
                        key={index}
                      >
                        <ReusableArticle
                          title={article.title}
                          image={article.urlToImage}
                          author={article.author}
                        />
                      </div>
                    ))}
              </div>
            </section>
          )}
        </div>
      );
    } // personalized feed for authenticated users
    else if (isPersonalizedFeed === true) {
      return (
        <div>
          {isLoading ? (
            <div className="w-full mt-12 text-center text-gray-700 text-[18px] mb-[80%]">
              Loading...
            </div>
          ) : (
            <section className="w-[96%] mr-auto ml-auto">
              {PrefSetting === true ? (
                <FilterPoPUp
                  PrefSetting={PrefSetting}
                  showPrefSetting={showPrefSetting}
                />
              ) : null}
              <div>
                <div className="ml-12 mt-12">
                  <p className="inline font-bold text-xl">FOR YOU </p>
                  <img
                    onClick={() => {
                      showPrefSetting(true);
                    }}
                    className="w-[30px] mb-1 ml-3  inline"
                    src={filter}
                    alt="filter icond"
                  />
                  <p className=" text-[17px]">Best of what interests you</p>
                </div>
              </div>
              <div className="flex flex-row flex-wrap w-[100%] mt-6  justify-evenly">
                {articles &&
                  articles
                    .filter((article) => article.urlToImage !== null)
                    .map((article, index) => (
                      <div
                        onClick={() => handleArticleClick(article)}
                        key={index}
                      >
                        <ReusableArticle
                          title={article.title}
                          image={article.urlToImage}
                          author={article.author}
                        />
                      </div>
                    ))}
              </div>
            </section>
          )}
        </div>
      );
    }
  }
  // feed for visitors

  if (isAuthenticated === false) {
    return (
      <>
        {isLoading ? (
          <div className="w-full mt-12 text-center text-gray-700 text-[18px] mb-[80%]">
            Loading...
          </div>
        ) : (
          <>
            <section className="w-[96%] mr-auto ml-auto">
              <div className="w-[100%] text-center mt-12 mb-12 font-bold text-2xl">
                <p>
                  TOP HEADLINES
                  <br />
                  SIGN UP FOR MORE
                </p>
              </div>
              <div className="flex flex-row flex-wrap w-[100%] mt-6  justify-evenly">
                {articles.results &&
                  articles.results.slice(0, 24).map((article, index) => (
                    <div
                      onClick={() => handleArticleClick(article)}
                      key={index}
                    >
                      <ReusableArticle
                        title={article.title}
                        image={article.multimedia && article.multimedia[0]?.url}
                        author={article.byline}
                      />
                    </div>
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
        )}
      </>
    );
  }
};

export default Feed;
