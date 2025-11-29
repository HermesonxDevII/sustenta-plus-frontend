import { Link } from "react-router-dom";
import Logo from "../Icons/Logo";
import Dashboard from "../Icons/Dashboard";
import Bell from "../Icons/Bell";
import Calendar from "../Icons/Calendar";
import Document from "../Icons/Document";

const Aside: React.FC = () => {
  return (
    <div className="aside-layout flex flex-col py-1 px-5 justify-between bg-secondary">
      <div className="flex flex-col gap-10">
        <div className="h-40 w-40 mx-auto">
          <Logo />
        </div>

        <div className="flex flex-col gap-2 font-bold text-white">
          <Link
            className="side-bar-option flex gap-3 px-2 items-center justify-start w-full h-12 rounded transition duration-300 pointer"
            to="/home"
          >
            <Dashboard />
            Inicio
          </Link>

          <Link
            className="side-bar-option flex gap-3 px-2 items-center justify-start w-full h-12 rounded transition duration-300 pointer"
            to="/reports"
          >
            <Document />
            Reportes
          </Link>

          <Link
            className="side-bar-option flex gap-3 px-2 items-center justify-start w-full h-12 rounded transition duration-300 pointer"
            to="/schedulings"
          >
            <Calendar />
            Agendamentos
          </Link>

          <Link
            className="side-bar-option flex gap-3 px-2 items-center justify-start w-full h-12 rounded transition duration-300 pointer"
            to="/collection-orders"
          >
            <Bell />
            Pedidos de Coleta
          </Link>
        </div>
      </div>

      <div className="flex w-full h-auto justify-center">
        <p className="font-bold text-white">Versão 1.5</p>
      </div>
    </div>
  )
}

export default Aside
