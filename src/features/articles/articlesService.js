import axios from "axios";

const newYorkTimesAPI =
  "https://api.nytimes.com/svc/topstories/v2/world.json?api-key=GmFRNUnADqSdTumRHl11225UUGWsSY4w";

const newsAPIForUser = "";

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
  fetchArtilesForVisitor,
  fetchArticlesByKeywordAndFilter,
  fetchPersonalizedFeed,
};

export default articlesService;
