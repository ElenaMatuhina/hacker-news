import { changeFormatDate } from "../common/utils/changeFormatDate"
import { Container } from "./Container"
import { Typography } from "@mui/material"

const NewsItem = props => {
  const { title, time, score, by, onClick } = props

  return (
    <>
      <Container onClick={onClick}>
        {title && <Typography variant="h6">Название: {title} </Typography>}
        {score && (
          <Typography variant="subtitle1" gutterBottom>
            Рейтинг: {score}
          </Typography>
        )}
        {by && (
          <Typography variant="subtitle1" gutterBottom>
            Ник автора: {by}
          </Typography>
        )}
        {time && (
          <Typography variant="subtitle1" gutterBottom>
            Дата публикации: {changeFormatDate(time)}
          </Typography>
        )}
      </Container>
    </>
  )
}

export { NewsItem }
