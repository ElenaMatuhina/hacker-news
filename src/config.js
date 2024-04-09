const BASE_API_URL = "https://hacker-news.firebaseio.com/v0/"
const ALL_NEWS = `${BASE_API_URL}newstories.json`
const DETAIL_NEWS = id => `${BASE_API_URL}item/${id}.json`

export { ALL_NEWS, DETAIL_NEWS }
