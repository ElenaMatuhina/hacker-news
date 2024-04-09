import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { getItem } from "../../api"

export const loadNewDetail = createAsyncThunk(
  "newsDetail/loadNewDetail",
  async (id, { rejectWithValue }) => {
    try {
      return getItem(id)
    } catch (err) {
      return rejectWithValue(err.response.data)
    }
  }
)

const initialState = {
  currentNews: null,
  status: "idle",
  error: null,
}

const detailSlice = createSlice({
  name: "newsDetail",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(loadNewDetail.pending, state => {
        state.status = "loading"
        state.error = null
      })
      .addCase(loadNewDetail.fulfilled, (state, action) => {
        state.status = "recieved"
        state.currentNews = action.payload
      })
      .addCase(loadNewDetail.rejected, (state, action) => {
        state.status = "rejected"
        state.error = action.payload || action.meta.error
      })
  },
})

export const detailReducer = detailSlice.reducer

export const selectCurrentNews = state => ({
  currentNews: state.detail.currentNews,
  status: state.detail.status,
  error: state.detail.error,
})
