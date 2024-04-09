import { Routes, Route } from "react-router-dom"
import { HomePage, DetailPage, NotFound } from "../pages"

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/news/:id" element={<DetailPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export { AppRouter }
