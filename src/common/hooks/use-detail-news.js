import { useDispatch, useSelector } from "react-redux"
import {
  loadNewDetail,
  selectCurrentNews,
} from "../../features/details/detail-slice"
import { useEffect } from "react"

export const useDetailNews = id => {
  const dispatch = useDispatch()
  const { currentNews, status, error, commits } = useSelector(selectCurrentNews)

  useEffect(() => {
    dispatch(loadNewDetail(id))
  }, [dispatch, id])

  return [currentNews, status, error, commits]
}
