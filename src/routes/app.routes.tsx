import { Navigate, Route, Routes } from "react-router-dom"
import Layout from "../components/Layout"
import { useAuth } from "../hooks/auth"
import Home from "../pages/Home"

const AppRoutes: React.FC = () => {

  const { user } = useAuth()

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Layout>
  )
}

export default AppRoutes
