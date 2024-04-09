import { loadNews } from "../features/news/news-slice"
import { useDispatch } from "react-redux"
import RestoreIcon from "@mui/icons-material/Restore"
import Button from "@mui/material/Button"

const ButtonRestore = () => {
  const dispatch = useDispatch()

  return (
    <Button
      onClick={() => dispatch(loadNews())}
      variant="outlined"
      startIcon={<RestoreIcon />}
    >
      Обновить
    </Button>
  )
}
export { ButtonRestore }
