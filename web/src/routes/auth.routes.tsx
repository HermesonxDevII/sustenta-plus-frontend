import { Navigate, Route, Routes } from "react-router-dom"
import SignIn from "../pages/SignIn"

const AuthRoutes: React.FC = () => (
    <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="*" element={<Navigate to="/" />} />
    </Routes>
)

export default AuthRoutes