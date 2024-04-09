import { useEffect, useState } from "react"
import { getItem } from "../../../api"
import { IconButton, Typography } from "@mui/material"
import Add from "@mui/icons-material/Add"
import HorizontalRule from "@mui/icons-material/HorizontalRule"
import styled from "styled-components"
import { sanitizeAndParseHTML } from "../../../common/utils/sanitizeAndParseHTML"

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 20px 20px 60px;

  @media (max-width: 479px) {
    padding: 10px 20px 20px 40px;
  }
`

const Text = styled(Typography)`
  word-wrap: break-word;
`

const Comment = ({ id }) => {
  const [commits, setCommits] = useState([])
  const [areKidsOpen, setAreKidsOpen] = useState(false)

  const onOpenKidsToggle = () => {
    setAreKidsOpen(!areKidsOpen)
  }

  useEffect(() => {
    getItem(id).then(data => setCommits(data))
  }, [id])

  const numberComments =
    commits && commits?.kids?.length ? commits?.kids?.length : null

  const isCommentAlive = commits && !commits?.deleted && commits.text

  const commentText = isCommentAlive ? sanitizeAndParseHTML(commits?.text) : ""

  return (
    <Wrapper>
      {commits?.by && isCommentAlive ? (
        <Typography variant="h6"> Автор: {commits.by} </Typography>
      ) : (
        <Typography variant="subtitle1" gutterBottom>
          deleted
        </Typography>
      )}
      {commentText && (
        <Text variant="subtitle1" gutterBottom>
          {commentText}
        </Text>
      )}
      {numberComments && (
        <Typography variant="subtitle2" gutterBottom>
          Количество комментариев: {numberComments}
        </Typography>
      )}
      {numberComments && (
        <div>
          <IconButton
            onClick={onOpenKidsToggle}
            aria-label={`${
              areKidsOpen ? "Close subcomments" : "Open Subcomments"
            }`}
          >
            {areKidsOpen ? <HorizontalRule /> : <Add />}
          </IconButton>
        </div>
      )}
      {areKidsOpen &&
        numberComments &&
        commits?.kids.map(comment => <Comment key={comment} id={comment} />)}
    </Wrapper>
  )
}

export { Comment }
