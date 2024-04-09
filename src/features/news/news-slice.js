import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { getNewsAllIds, getItem } from "../../api"
import { getLatestHundredNews } from "../../common/utils/getLatestHundredNews"

export const loadNews = createAsyncThunk(
  "news/loadNews",
  async (_, { rejectWithValue }) => {
    try {
      const allIds = await getNewsAllIds()
      const ids = getLatestHundredNews(allIds)
      const promises = await ids.map(id => getItem(id))
      const stories = await Promise.all(promises)
      return stories
    } catch (err) {
      return rejectWithValue(err.response.data)
    }
  }
)

const initialState = {
  status: "idle",
  error: null,
  list: [],
  idStatus: 0,
}

const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
    setIdStatus: (state, action) => {
      state.idStatus = action.payload
    },
  },
  extraReducers: builder => {
    builder
      .addCase(loadNews.pending, state => {
        state.status = "loading"
        state.error = null
      })
      .addCase(loadNews.fulfilled, (state, action) => {
        state.status = "recieved"
        state.list = action.payload
      })
      .addCase(loadNews.rejected, (state, action) => {
        state.status = "rejected"
        state.error = action.payload || action.meta.error
      })
  },
})

export const { setIdStatus } = newsSlice.actions
export const newsReducer = newsSlice.reducer

//selectors

export const selectAllNews = state => state.news.list

export const selectNewsInfo = state => ({
  status: state.news.status,
  error: state.news.error,
  quantity: state.news.list.length,
})
