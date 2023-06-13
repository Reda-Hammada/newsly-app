import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import ReusableButton from "./ReusableButton ";
import { availableCategories } from "../features/articles/articleSlice";

const SearchBar = () => {
  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state.articles);
  const { register, handleSubmit } = useForm();

  useEffect(() => {
    dispatch(availableCategories());
    // Dispatch the action creator to fetch categories
  }, [dispatch]);

  const fetchArticles = (data) => {};

  return (
    //ultimate container for search bar
    <section className="w-[80%] mt-12 ml-auto mr-auto">
      <div className="w-[100%]  ml-auto mr-auto">
        <p className="font-bold  pb-2  border-red-600 border-b-4 border-solid text-xl">
          Search for article :
        </p>
      </div>
      <div className="w-[100%] pb-12 rounded bg-gray-100 ml-auto mr-auto  mt-12">
        <form onSubmit={handleSubmit(fetchArticles)}>
          <div className="w-[100%]  text-center">
            <input
              className=" mt-12 pl-5 h-[40px] w-[70%] "
              type="search"
              placeholder="search by keywoard"
              required
              name="keyword"
              {...register("keyword")}
            />
          </div>
          <div className="w-[100%] mt-6 ml-auto mr-auto">
            <div className="w-[100%] flex flex-wrap justify-evenly">
              {/* Categories */}

              <label className="font-bold">Category :</label>
              <select className=" w-[20%]">
                <option value=""></option>

                {categories &&
                  categories.map((category) => (
                    <option value={category}>{category}</option>
                  ))}
              </select>
              {/* sources */}

              <label>Source :</label>
              <select className=" w-[20%]">
                <option value=""></option>
                <option value="ABC News">ABC News</option>
                <option value="Al Jazeera English">Al Jazeera English</option>
                <option value="BBC News">BBC News</option>
                <option value="Business Insider">Business Insider</option>
                <option value="CNN">CNN</option>
                <option value="CBS News">CBS News</option>
              </select>
              {/* date */}
              <label>From :</label>
              <input type="date" />
              <label>to :</label>
              <input type="date" />
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default SearchBar;
