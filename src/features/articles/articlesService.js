import axios from "axios";

// to get top headlines articles for visitors non user
const newYorkTimesAPI =
  "https://api.nytimes.com/svc/topstories/v2/world.json?api-key=GmFRNUnADqSdTumRHl11225UUGWsSY4w";
// route api to get available categories for users to choose
const categoriesAPI = "http://127.0.0.1:8000/api/categories";
// personalized news
const newsAPIForUser = "";

const fetchAvailabaleCategory = async () => {
  const response = await axios.get(categoriesAPI);
  if (response) {
    return response.data.categories;
  }
};
// fetch article from newyorktimes for visitor
const fetchArtilesForVisitor = async () => {
  const response = await axios.get(newYorkTimesAPI);
  if (response.data) {
    return response.data;
  }
};

// fetch article from newyorktimes for authenticated user
const fetchPersonalizedFeed = async () => {
  const response = await axios.get(newsAPIForUser);
  if (response.data) {
    return response.data;
  }
};

const fetchArticlesByKeywordAndFilter = async (data) => {
  const searchAndFilterAPI = `https://newsapi.org/v2/everything?q=${data.keyword}&source=${data.source}&from=${data.date}&apiKey=e056ce2e987c4986a3bb905059444cd4`;
  const response = await axios.get(searchAndFilterAPI);
  if (response.data) {
    console.log(response.data);
    return response.data;
  }
};

const articlesService = {
  fetchAvailabaleCategory,
  fetchArtilesForVisitor,
  fetchArticlesByKeywordAndFilter,
  fetchPersonalizedFeed,
};

export default articlesService;
