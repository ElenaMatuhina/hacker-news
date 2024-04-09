import { NewsList } from "../features/news/NewsList"
import { ButtonRestore } from "../components"
import { Wrapper } from "../components"
import { Typography } from "@mui/material"
import styled from "styled-components"

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;

  border-bottom: 2px solid black;

  button {
    margin: 20px;
  }
  @media (max-width: 479px) {
    width: 100%;
    flex-direction: column;
    align-items: start;
  }
`

export const Title = styled(Typography)`
  text-decoration: underline;
  padding-left: 20px;
`

const HomePage = () => {
  return (
    <Wrapper>
      <Header>
        <Title variant="h3">HomePage</Title>
        <ButtonRestore />
      </Header>
      <NewsList />
    </Wrapper>
  )
}

export { HomePage }
