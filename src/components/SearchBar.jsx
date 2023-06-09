import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import ReusableButton from "./ReusableButton ";
import { searchAndFilter } from "../features/articles/articleSlice";
import { availableCategories } from "../features/articles/articleSlice";

const SearchBar = () => {
  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state.articles);
  const { isDarkTheme } = useSelector((state) => state.theme);

  const { register, handleSubmit } = useForm();

  useEffect(() => {
    dispatch(availableCategories());
    // Dispatch the action creator to fetch categories
  }, [dispatch]);

  // search and filter articles
  const searchArticles = (data) => {
    dispatch(searchAndFilter(data));
  };

  return (
    //ultimate container for search bar
    <section className="w-[80%] mt-12 ml-auto mr-auto">
      <div className="w-[100%]  ml-auto mr-auto">
        <p className="font-bold  pb-2  border-red-600 border-b-4 border-solid text-xl">
          Search for article :
        </p>
      </div>
      <div
        className={` w-[100%] pb-12 rounded ${
          isDarkTheme ? "bg-[#454545] text-white" : "bg-gray-100 text-black"
        }ml-auto mr-auto  mt-12`}
      >
        <form onSubmit={handleSubmit(searchArticles)}>
          <div className="w-[100%]  text-center">
            <input
              className=" text-black mt-12 pl-5 h-[40px] w-[70%] "
              type="search"
              placeholder="search by keywoard"
              required
              name="keyword"
              {...register("keyword")}
            />
          </div>
          <div className="w-[100%] mt-6 ml-auto mr-auto">
            <div className="flex flex-row flex-wrap w-[100%]  justify-evenly ">
              {/* Categories */}
              <div className="mt-2">
                <label className="font-bold">Category :</label>
                <select
                  className=" w-[100%] text-black"
                  {...register("category")}
                >
                  <option value=""></option>

                  {categories &&
                    categories.map((category) => (
                      <option value={category}>{category}</option>
                    ))}
                </select>
              </div>
              {/* sources */}

              <div className="mt-2">
                <label className="font-bold">Source :</label>
                <select
                  className=" text-black w-[100%]"
                  {...register("source")}
                >
                  <option value=""></option>
                  <option value="ABC News">ABC News</option>
                  <option value="The Guardian">The Guardian</option>

                  <option value="Al Jazeera English">Al Jazeera English</option>
                  <option value="BBC News">BBC News</option>
                  <option value="Business Insider">Business Insider</option>
                  <option value="CNN">CNN</option>
                </select>
              </div>
              {/* date */}
              <div className="mt-2 ">
                <label className="font-bold mr-3 ">date :</label>

                <input
                  className="w-[100%] text-black text-center"
                  type="date"
                  {...register("date")}
                />
              </div>
            </div>
          </div>
          <div className="text-center mt-6">
            <ReusableButton
              text="search"
              className="text-white w-[100px] mt-3 rounded  h-[40px] bg-red-500 hover:bg-red-600 font-bold"
              type="submit"
            />
          </div>
        </form>
      </div>
    </section>
  );
};

export default SearchBar;
