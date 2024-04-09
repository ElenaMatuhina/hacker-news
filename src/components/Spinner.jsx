import { CircularProgress } from "@mui/material"
import styled from "styled-components"

const SpinnerWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50vh;
`
const Spinner = () => (
  <SpinnerWrapper>
    <CircularProgress />
  </SpinnerWrapper>
)

export { Spinner }
