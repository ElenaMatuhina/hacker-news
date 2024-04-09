import { useDispatch, useSelector } from "react-redux"
import {
  selectAllNews,
  selectNewsInfo,
  loadNews,
} from "../../features/news/news-slice"
import { useEffect } from "react"

export const useLoadingNews = () => {
  const dispatch = useDispatch()
  const news = useSelector(selectAllNews)
  const { status, error, quantity } = useSelector(selectNewsInfo)

  useEffect(() => {
    if (!quantity) {
      dispatch(loadNews())
    }
  }, [quantity, dispatch])

  return [news, status, error]
}
