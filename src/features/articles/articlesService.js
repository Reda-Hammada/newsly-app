import axios from "axios";
const fetchArtilesForVisitor = async () => {
  const response = await axios.get(
    "https://newsapi.org/v2/top-headlines?country=us&pageSize=20&apiKey=e056ce2e987c4986a3bb905059444cd4"
  );
  if (response.data) {
    return response.data;
  }
};

const fetchArticlesByCategory = () => {};

const fetchArticlesByKeywordAndFilter = () => {};

const articlesService = {
  fetchArtilesForVisitor,
  fetchArticlesByKeywordAndFilter,
};

export default articlesService;
