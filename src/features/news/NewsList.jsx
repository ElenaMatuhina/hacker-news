import { useLoadingNews } from "../../common/hooks/use-loading-news"
import { NewsItem } from "../../components"
import { loadNews, setIdStatus } from "./news-slice"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { List, ListItem, Typography } from "@mui/material"
import { Spinner } from "../../components/Spinner"

const NewsList = () => {
  const idStatus = useSelector(state => state.news.idStatus)
  const [news, status, error] = useLoadingNews()
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    const intervalUpdateNews = setInterval(() => dispatch(loadNews()), 60000)
    return () => clearInterval(intervalUpdateNews)
  }, [dispatch])

  const handleListItemClick = index => {
    dispatch(setIdStatus(index))
    navigate(`/news/${index}`)
  }

  return (
    <>
      {error && <Typography variant="h6">Нет данных</Typography>}
      {status === "loading" && <Spinner />}
      {status === "recieved" && (
        <List
          component="nav"
          aria-label="main mailbox folders"
          sx={{ padding: 0 }}
        >
          {news.map(item => (
            <ListItem
              key={item.id}
              sx={{ borderTop: "1px solid rgb(224, 224, 224)", padding: 0 }}
              button
              selected={idStatus === item.id}
              onClick={() => handleListItemClick(item.id)}
            >
              <NewsItem {...item} />
            </ListItem>
          ))}
        </List>
      )}
    </>
  )
}

export { NewsList }
