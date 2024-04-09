import { useNavigate, useParams } from "react-router-dom"
import { NewsDetail } from "../features/details/NewsDetail"
import ArrowBack from "@mui/icons-material/ArrowBack"
import Button from "@mui/material/Button"
import { Header } from "./HomePage"

const DetailPage = () => {
  const { id } = useParams()
  const navigate = useNavigate()

  return (
    <div>
      <Header>
        <Button
          onClick={() => navigate("/")}
          variant="outlined"
          startIcon={<ArrowBack />}
        >
          Назад
        </Button>
      </Header>
      <NewsDetail id={id} navigate={navigate} />
    </div>
  )
}

export { DetailPage }
