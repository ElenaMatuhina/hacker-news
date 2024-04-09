import { Info } from "./Info"
import { useDetailNews } from "../../common/hooks/use-detail-news"
import { Spinner } from "../../components/Spinner"
import { Typography } from "@mui/material"

const NewsDetail = ({ id, navigate }) => {
  const [currentNews, status, error] = useDetailNews(id)

  return (
    <>
      {error && <Typography variant="h6">Нет данных</Typography>}
      {status === "loading" && <Spinner/>}
      {status === "recieved" && <Info push={navigate} {...currentNews} />}
    </>
  )
}

export { NewsDetail }
