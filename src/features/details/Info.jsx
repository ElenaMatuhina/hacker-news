import { changeFormatDate } from "../../common/utils/changeFormatDate"
import { Comment } from "./comments/Comment"
import { Container } from "../../components"
import { Divider, Link, Typography } from "@mui/material"

const Info = props => {
  const { title, url, time, by, kids } = props

  return (
    <Container>
      {title && <Typography variant="h6">Заголовок: {title}</Typography>}
      {url && (
        <Link
          href={url}
          underline="always"
          sx={{ marginBottom: "6px", cursor: "pointer" }}
        >
          ссылкa на новость
        </Link>
      )}
      {time && (
        <Typography variant="subtitle1" gutterBottom>
          дата: {changeFormatDate(time)}
        </Typography>
      )}
      {by && (
        <Typography variant="subtitle1" gutterBottom>
          автор: {by}
        </Typography>
      )}
      {kids?.length && (
        <Typography variant="subtitle2" gutterBottom>
          Количество комментариев: {kids?.length || 0}
        </Typography>
      )}
      <Divider />
      {kids?.length &&
        kids.map(comment => <Comment key={comment} id={comment} />)}
    </Container>
  )
}

export { Info }
