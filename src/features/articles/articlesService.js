import axios from "axios";

// to get top headlines articles for visitors non user
const newYorkTimesAPI =
  "https://api.nytimes.com/svc/topstories/v2/world.json?api-key=GmFRNUnADqSdTumRHl11225UUGWsSY4w";
// route api to get available categories for users to choose
const categoriesAPI = "http://localhost:8000/api/categories";

// open news api key
const newsAPIKEY = "fba908da20b94b9dbd1cb874c4598d1e";

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

const fetchPersonalizedFeed = async (preferences) => {
  // extract user pereferences filter the null ones
  console.log(`preferecnes ${preferences}`);
  const categories = preferences
    .map((preference) => preference.preferred_category)
    .filter((category) => category !== null);
  console.log(categories);
  const sources = preferences
    .map((preference) => preference.preferred_source)
    .filter((source) => source !== null);
  console.log(sources);

  const authors = preferences
    .map((preference) => preference.preferred_author)
    .filter((author) => author !== null);
  let articles = [];

  // Search by categories
  for (const category of categories) {
    const APIpersonalizedByCategory = `https://newsapi.org/v2/top-headlines?q=${category}&apiKey=${newsAPIKEY}`;
    const responseByCategory = await axios.get(APIpersonalizedByCategory);
    articles = articles.concat(responseByCategory.data.articles);
  }

  // Search by sources
  for (const source of sources) {
    const APIpersonalizedBySource = `https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${newsAPIKEY}`;
    const responseBySource = await axios.get(APIpersonalizedBySource);
    articles = articles.concat(responseBySource.data.articles);
  }

  // Search by authors
  for (const author of authors) {
    const APIpersonalizedByAuthor = `https://newsapi.org/v2/everything?q=${author}&apiKey=${newsAPIKEY}`;
    const responseByAuthor = await axios.get(APIpersonalizedByAuthor);
    articles = articles.concat(responseByAuthor.data.articles);
  }

  return articles;
};

const fetchArticlesByKeywordAndFilter = async (data) => {
  // using two requests because this API provider does not provide an endpoit to search and filter by source and category in the same time
  // to filter with sources
  const searchAndFilterWithSources = `https://newsapi.org/v2/everything?q=${data.keyword}&source=${data.source}&from=${data.date}&apiKey=${newsAPIKEY}`;
  // to filter with categories
  const searchAndFilterWithCategories = `https://newsapi.org/v2/top-headlines?q=${data.keyword}&category=${data.category}&from=${data.date}&apiKey=${newsAPIKEY}`;

  const [responseBySource, responseByCategory] = await Promise.all([
    axios.get(searchAndFilterWithSources),
    axios.get(searchAndFilterWithCategories),
  ]);

  const articlesBySource = responseBySource.data || [];
  const articlesByCategory = responseByCategory.data || [];

  return {
    articlesBySource,
    articlesByCategory,
  };
};

const articlesService = {
  fetchAvailabaleCategory,
  fetchArtilesForVisitor,
  fetchArticlesByKeywordAndFilter,
  fetchPersonalizedFeed,
};

export default articlesService;
