import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import ReusableButton from "../ReusableButton ";
import preferencesService from "../../features/preferences/preferencesService";
import { availableCategories } from "../../features/articles/articleSlice";
import { useNavigate } from "react-router-dom";

const FilterPoPUp = (props) => {
  const { PrefSetting, showPrefSetting } = props;
  const dispatch = useDispatch();
  const [isOpen, setOpen] = useState(true);
  const { categories } = useSelector((state) => state.articles);

  const { isAuthenticated } = useSelector((state) => state.auth || {});
  const navigate = useNavigate();
  const sources = [
    "ABC News",
    "The Guardian",
    "Al Jazeera English",
    "BBC News",
    "Business Insider",
    "CNN",
  ];

  const authors = [
    "Emma Roth",
    "Will Shanklin",
    "Daniel Cooper",
    "Megan Wollerton",
    "Jennifer Ouellette",
    "Amy Skorheim",
    "Alison Flood",
    "Hartley Charlton",
  ];

  const { isDarkTheme } = useSelector((state) => state.theme);

  const [selectedPreferences, setSelectedPreferences] = useState({
    categories: [],
    authors: [],
    sources: [],
  });

  // handler for categories
  const handleSelectedCategories = (category) => {
    // if category is pre selected remove it
    if (selectedPreferences.categories.includes(category)) {
      setSelectedPreferences((prevSate) => {
        return {
          ...prevSate,
          categories: prevSate.categories.filter((item) => item !== category),
        };
      });
    } else {
      // category not selected yet add it
      setSelectedPreferences((prevSelected) => {
        return {
          ...prevSelected,
          categories: [...prevSelected.categories, category],
        };
      });
    }
  };

  // handler for sources
  const handleSelectedSources = (source) => {
    // if source is pre selectedremove it
    if (selectedPreferences.sources.includes(source)) {
      setSelectedPreferences((prevState) => {
        return {
          ...prevState,
          sources: prevState.sources.filter((item) => item !== source),
        };
      });
    } else {
      // source is not selected yet add it
      setSelectedPreferences((prevState) => {
        return {
          ...prevState,
          sources: [...prevState.sources, source],
        };
      });
    }
  };

  // handler for authors
  const handleSelectedAuthors = (author) => {
    // if author is pre selected remove it
    if (selectedPreferences.authors.includes(author)) {
      setSelectedPreferences((prevState) => {
        return {
          ...prevState,
          authors: prevState.authors.filter((item) => item !== author),
        };
      });
    } else {
      // author is not selected yet add it
      setSelectedPreferences((prevState) => {
        return {
          ...prevState,
          authors: [...prevState.authors, author],
        };
      });
    }
  };

  const submitPereferences = () => {
    preferencesService.storePreferences(selectedPreferences);
  };

  useEffect(() => {
    dispatch(availableCategories());
  }, [dispatch]);

  return (
    <section className="w-[100wh] h-[100%] overflow-hidden right-0 left-0   absolute top-0 bg-opacity-50 bg-black">
      <div
        className={`w-[380px] h-[95vh] overflow-y-scroll mt-[2%] ml-auto mr-auto rounded ${
          isDarkTheme ? "bg-dark-theme-color text-white" : "bg-white text-black"
        }`}
      >
        <div className="w-[100%] pt-5 pl-3">
          <h2 className="font-bold text-xl">
            PERSONALIZED<span className="text-red-600"> FOR YOU</span>
          </h2>
          <p className="ml-1 text-[17px] mt-1">
            We’ll show you more articles based on your interests
          </p>
          <form onSubmit={submitPereferences}>
            <div className="mt-3 ">
              <h3 className="font-bold text-xl">Categories :</h3>
              <div className="w-[90%] flex flex-wrap flex-start ">
                {categories.map((category) => (
                  <span
                    className={`${
                      selectedPreferences.categories.includes(category)
                        ? "text-white bg-red-600"
                        : "bg-gray-400 text-white"
                    } ml-3 mt-3 pl-2 pr-2 cursor-pointer h-[42px] pt-2 pb-1 rounded text-[18px]`}
                    onClick={() => handleSelectedCategories(category)}
                    key={category}
                  >
                    {category}
                  </span>
                ))}
              </div>
            </div>
            <div className="mt-3 ">
              <h3 className="font-bold text-xl">Sources :</h3>
              <div className="w-[90%] flex flex-wrap flex-start ">
                {sources.map((source) => (
                  <span
                    onClick={() => handleSelectedSources(source)}
                    className={`${
                      selectedPreferences.sources.includes(source)
                        ? "text-white bg-red-600"
                        : "bg-gray-400 text-white"
                    } ml-3 mt-3 pl-2 pr-2 h-[40px] pt-2 pb-1 cursor-pointer rounded text-[18px]`}
                    key={source}
                  >
                    {source}
                  </span>
                ))}
              </div>
            </div>
            <div className="mt-3 ">
              <h3 className=" font-bold text-xl">Authors:</h3>
              <div className="w-[90%] flex flex-wrap flex-start ">
                {authors.map((author) => (
                  <span
                    onClick={() => handleSelectedAuthors(author)}
                    className={`${
                      selectedPreferences.authors.includes(author)
                        ? "text-white bg-red-600"
                        : "bg-gray-400 text-white"
                    } ml-3 mt-3 pl-2 pr-2  h-[40px] pt-2 pb-1 cursor-pointer rounded text-[18px]`}
                    key={author}
                  >
                    {author}
                  </span>
                ))}
              </div>
            </div>
            <div className="w-[100%] pb-3  pr-8 border-t mt-5 border-bg-gray-300 pt-2  border-solid  ">
              <ReusableButton
                disabled={
                  selectedPreferences.categories.length === 0 ||
                  selectedPreferences.authors.length === 0 ||
                  selectedPreferences.sources.length === 0
                    ? true
                    : false
                }
                text="save"
                className={`text-white float-right   w-[100px] mt-3 rounded  h-[40px] bg-red-500  font-bold ${
                  selectedPreferences.categories.length === 0 ||
                  selectedPreferences.authors.length === 0 ||
                  selectedPreferences.sources.length === 0
                    ? "disabled:opacity-50  cursor-default"
                    : "hover:bg-gray-400 cursor-pointer"
                }`}
                type="submit"
              />
              {PrefSetting === true ? (
                <div onClick={() => showPrefSetting(false)}>
                  <ReusableButton
                    text="cancel"
                    className="text-white mb-2 float-right mr-6   w-[100px] mt-3 rounded  h-[40px] bg-gray-500  font-bold "
                  />
                </div>
              ) : null}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default FilterPoPUp;
