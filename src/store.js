import { configureStore } from "@reduxjs/toolkit"
import { newsReducer } from "./features/news/news-slice"
import { detailReducer } from "./features/details/detail-slice"

const store = configureStore({
  reducer: {
    news: newsReducer,
    detail: detailReducer,
  },
  devTools: true,
})

export { store }
