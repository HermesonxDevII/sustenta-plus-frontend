// import { useState } from "react"
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./app.routes";
import AuthRoutes from "./auth.routes";

const Routes: React.FC = () => {
  // const [logged, setLogged] = useState<boolean>(false);
  const logged = false

  return (
    <BrowserRouter>
      { logged ? <AppRoutes /> : <AuthRoutes /> }
    </BrowserRouter>
  )
}

export default Routes
