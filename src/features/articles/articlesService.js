import axios from "axios";

// to get top headlines articles for visitors non user
const newYorkTimesAPI =
  "https://api.nytimes.com/svc/topstories/v2/world.json?api-key=GmFRNUnADqSdTumRHl11225UUGWsSY4w";

const newsAPIForUser = "";

// route api to get available categories for users to choose
const categoriesAPI = "http://127.0.0.1:8000/api/categories";

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

const fetchArticlesByCategory = async () => {};

const fetchArticlesByKeywordAndFilter = async () => {};

const articlesService = {
  fetchAvailabaleCategory,
  fetchArtilesForVisitor,
  fetchArticlesByKeywordAndFilter,
  fetchPersonalizedFeed,
};

export default articlesService;
