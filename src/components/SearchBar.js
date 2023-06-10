import React from "react";
import { useEffect } from "react";
import { useForm } from "react-hook-form";

function SearchBar() {
  const { register, handleSubmit } = useForm();

  const fetchArticles = (data) => {};
  return (
    <section className="">
      <form onSubmit={handleSubmit(fetchArticles)}>
        <div>
          <input
            type="search"
            placeholder="search by keywoard"
            required
            name="keyword"
            {...register("keyword")}
          />
        </div>
        <div>
          <select {...register("category")}>
            <option value=""></option>
            <option value="politics">Politics</option>
            <option value="health">health</option>
            <option value="entertainment">entertainment</option>
            <option value="sports">sports</option>
            <option value="technology">technology</option>
            <option value="business">technology</option>
          </select>
        </div>
        <div>
          <select {...register("source")}>
            <option value=""></option>
            <option value="Politics">Politics</option>
            <option value="health">health</option>
            <option value="entertainment">entertainment</option>
            <option value="sports">sports</option>
            <option value="Technology">technology</option>
          </select>
        </div>
        <div></div>
      </form>
    </section>
  );
}

export default SearchBar;
