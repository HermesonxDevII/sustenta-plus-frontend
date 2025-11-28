import { useAuth } from "../../../hooks/auth"
import default_avatar from "../../../assets/img/default_avatar.png"
import { useState } from "react"
import AngleUp from "../icons/AngleUp"
import AngleDown from "../icons/AngleDown"
import { Link } from "react-router-dom"
import User from "../icons/User"
import Power from "../icons/Power/Index"

const UserCard: React.FC = () => {

  const { user, logout } = useAuth()

  const [openMenu, setOpenMenu] = useState<boolean>(false)

  return (
    <div
      className="relative bg-white flex gap-2 items-center px-2 h-14 w-64 rounded shadow-lg"
      onClick={() => setOpenMenu(!openMenu)}
    >
      <div className="flex-1 h-auto font-bold">{user?.name}</div>
      <div className="flex items-center justify-end w-auto h-auto">
        {openMenu
          ? <AngleUp />
          : <AngleDown />
        }

        <img
          src={default_avatar}
          className="rounded w-10 h-10"
          alt=""
        />
      </div>

      {openMenu &&
        <div className="absolute right-0 bg-white flex flex-col gap-4 items-center justify-center p-4 mt-52 h-auto w-64 font-bold rounded shadow-lg">
          <Link
            className="user-menu-btn group flex gap-3 px-2 items-center justify-start w-full h-12 rounded transition duration-300 pointer hover:text-white"
            to="/register"
          >
            <User />
            Meu Perfil
          </Link>

          <button
            className="user-menu-btn group flex gap-3 px-2 items-center justify-start w-full h-12 rounded transition duration-300 pointer hover:text-white"
            onClick={logout}
          >
            <Power />
            Sair
          </button>
        </div>
      }
    </div>
  )
}

export default UserCard
