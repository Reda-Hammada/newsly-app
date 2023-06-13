import React, { useEffect } from "react";
import { useForm } from "react-hook-form";

import { useSelector, useDispatch } from "react-redux";

const FilterPoPUp = () => {
  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state.articles);
  const { register, handleSubmit } = useForm();

  useEffect(() => {}, []);
  return <section></section>;
};

export default FilterPoPUp;
