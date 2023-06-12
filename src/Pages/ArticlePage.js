import { useLocation } from "react-router-dom";
import Header from "../components/Header";
import Auth from "../components/Auth";
import ReuSableLink from "../components/ReuSableLink";
import HeroSection from "../components/HeroSection";
import Footer from "../components/Footer";
import { useSelector } from "react-redux";

const ArticlePage = () => {
  const { isAuthenticated } = useSelector((state) => state.auth);
  const location = useLocation();
  const { article } = location.state;

  // article for visitors
  if (isAuthenticated === false) {
    return (
      <div className="overflow-y-scroll overflow-x-hidden h-screen">
        <Header />
        <ReuSableLink title={article.title} />
        <Auth />
        <div className="w-[80%] mb-32 mr-auto ml-auto">
          <div className="w-[100%]">
            <div>
              <h1 className="font-bold text-3xl mt-6 mb-1">{article.title}</h1>
            </div>
            <div className="mb-9">
              <p className="text-gray-400 ml-2">{article.byline}</p>
            </div>
            <div className="">
              <img
                className="w-[70vw] h-[40vh] "
                src={article.multimedia[0].url}
                alt="article image"
              />
            </div>
            <div className="w-[75vw] text-[18px] mt-3">
              <p>{article.abstract}</p>
            </div>
          </div>
        </div>
        <div className="w-[100%] pb-[1px] pb-[10px] bg-gray-100">
          <HeroSection />
        </div>
        <div className="mt-16 mb-12">
          <Footer />
        </div>
      </div>
    );

    // article for authenticated users
  } else if (isAuthenticated === true) {
    return <div>soon</div>;
  }
};

export default ArticlePage;
