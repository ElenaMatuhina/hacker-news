export const getLatestHundredNews = listNews =>
  listNews.slice(0, 100).sort((a, b) => a.time - b.time)
