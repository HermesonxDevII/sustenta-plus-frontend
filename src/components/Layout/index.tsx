import Aside from "../Aside"
import Header from "../Header"

const Layout: React.FC<React.PropsWithChildren<{}>> = ({ children }) => (
  <div className="grid grid-layout h-screen min-w-[315px] bg-primary">
    <Header />
    <Aside />
    <div className="content-layout">
      { children }
    </div>
  </div>
)

export default Layout
