import { ArrowLongRightIcon } from "@heroicons/react/20/solid";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

// Variables de Redux
import { useAppDispatch } from "../app/hooks";
import { sidebarSlice } from "../features/sidebar/sidebarSlice";

import {
  commerce,
  education,
  giftcard,
  rappi,
  setting,
  logout,
} from "../assets/img/icons/index";
import logo from "../assets/img/LogoNadar.png";
import { home } from "../assets/img/icons/index";

// Arreglo de servicios de la empresa
const Menus = [
  { title: "Capacitaciones", src: education },
  { title: "Comercial", src: commerce },
  { title: "Rappi", src: rappi },
  { title: "Gif Cards", src: giftcard },
  { title: "Sistemas", src: setting, gap: true },
  { title: "Salir", src: logout },
];

function SideBar() {
  // Librerias de utilidades
  //const openSidebar = useAppSelector((state) => state.openSidebar.Sidebar.open);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [open, setOpen] = useState(true);

  const stateOpenSidebar = () => {
    setOpen(!open);
    dispatch(sidebarSlice.actions.openSlice(open));
  };

  function menusNavigate(title: string) {
    if (title === "Capacitaciones") navigate(`/home/capacitaciones`);
    if (title === "Comercial") navigate(`/home/comercial`);
    if (title === "Rappi") navigate(`/home/rappi`);
    if (title === "Gif Cards") navigate(`/home/giftcard`);
    if (title === "Sistemas") navigate(`/home/sistemas`);
    if (title === "Salir") {
      sessionStorage.clear();
      navigate(`/`);
    }
  }

  return (
    <div
      className={` ${
        open ? "md:w-72 w-screen" : "md:w-20 max-sm:bg-transparent w-0"
      } bg-gray-800 h-screen p-5 pt-8 absolute duration-500 flex flex-col justify-between`}
    >
      <div
        className={`duration-75 flex md:absolute max-md:fixed cursor-pointer -right-5 top-6 w-7 rounded-full p-5 bg-green-600 justify-center items-center hover:scale-105 ${
          !open && "max-md:right-5 max-md:absolute"
        }`}
        onClick={() => stateOpenSidebar()}
      >
        <ArrowLongRightIcon
          className={`absolute h-5 w-5 text-stone-100 rounded-full ease-out duration-700 hover:scale-150 ${
            open && "rotate-180"
          }`}
          aria-hidden="true"
        />
      </div>
      <div className="flex gap-x-4 items-center justify-center">
        <div
          className={`text-white origin-left font-medium text-xl duration-75 ${
            !open && ""
          }`}
        >
          {!open ? (
            <>
              <Link to="/home" className="h-20 flex items-center">
                <img
                  className={`w-9 items-center hover:scale-125 ${
                    !open && "duration-75"
                  }`}
                  alt="Your Company"
                  src={home}
                />
              </Link>
            </>
          ) : (
            <>
              <Link to="/home">
                <img
                  className={`mx-auto h-20 w-auto hover:scale-90 ${
                    !open && "duration-300 scale-0"
                  }`}
                  alt="Your Company"
                  src={logo}
                />
                Creaciones Nadar
              </Link>
            </>
          )}
        </div>
      </div>
      <ul className={`py-2 ${!open && "max-md:hidden"}`}>
        {Menus.map((Menu, index) => (
          <li
            key={index}
            className={`flex rounded-md p-1 cursor-pointer hover:scale-90 text-gray-300 hover:text-gray-800 text-sm items-center gap-x-4 
                  ${Menu.gap ? " mt-28" : "mt-2"} ${
              index === 0 && "bg-light-white"
            } `}
          >
            <div
              className="w-full flex items-center p-1 rounded-sm"
              onClick={() => menusNavigate(Menu.title)}
            >
              <img className="w-8" src={Menu.src} />
              <span
                className={`${
                  !open && "hidden"
                } ml-2 origin-left text-white transition duration-300 hover:border-b-2 font-semibold`}
              >
                {Menu.title}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SideBar;
