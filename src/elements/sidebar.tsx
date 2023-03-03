import { LockClosedIcon, BookOpenIcon } from "@heroicons/react/20/solid";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// Variables de Redux
import { useAppDispatch, useAppSelector  } from "../app/hooks";
import { sidebarSlice } from "../features/sidebar/sidebarSlice";

import {
  commerce,
  education,
  giftcard,
  rappi,
  setting,
} from "../assets/img/icons";

// Arreglo de servicios de la empresa
const Menus = [
  { title: "Capacitaciones", src: education },
  { title: "Comercial", src: commerce },
  { title: "Rappi", src: rappi },
  { title: "Gif Cards", src: giftcard },
  { title: "Sistemas", src: setting, gap: true },
  /* { title: "Configuracion", src: Setting }, */
];

function SideBar() {
  
  // Librerias de utilidades
  const openSidebar = useAppSelector((state) => state.openSidebar.Sidebar.open) 
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const stateOpenSidebar = () => {
    setOpen(!open);
    dispatch(sidebarSlice.actions.openSlice(open));
  }

  function menusNavigate(title: string) {
    if (title === "Capacitaciones") navigate(`/`);
    if (title === "Salir") navigate(`/SignIn`);
  }

  return (
    <>
      <div
        className={` ${
          open ? "sm:w-72 w-full" : "sm:w-20 w-12"
        } bg-slate-900 h-full p-5 pt-8 fixed duration-500 flex flex-col`}
      >
        <div
          className={`absolute flex cursor-pointer -right-5 top-6 w-7 rounded-full p-5 bg-indigo-400 justify-center items-center`}
          onClick={() => stateOpenSidebar()}
        >
          <LockClosedIcon
            className="absolute h-5 w-5 text-zinc-300 rounded-full"
            aria-hidden="true"
          />
        </div>
        <div className="flex gap-x-4 items-center justify-center hover:scale-90">
          <img
            className={`cursor-pointer duration-500 ${
              open && "rotate-[360deg]"
            }`}
          />
          <h1
            className={`text-white origin-left font-medium text-xl duration-200 ${
              !open && "scale-0"
            }`}
          >
            Creaciones Nadar
          </h1>
        </div>
        <ul className="py-6">
          {Menus.map((Menu, index) => (
            <li
              key={index}
              className={`flex rounded-md p-1 cursor-pointer hover:bg-light-white hover:scale-110  hover:bg-slate-500 text-gray-300 hover:text-gray-800 text-sm items-center gap-x-4 
                  ${Menu.gap ? "mt-40" : "mt-2"} ${
                index === 0 && "bg-light-white"
              } `}
            >
              <div
                className="w-full flex items-center bg-white p-1 rounded-sm"
                onClick={() => menusNavigate(Menu.title)}
              >
                <img className="w-8" src={Menu.src} />
                <span
                  className={`${
                    !open && "hidden"
                  } ml-2 origin-left duration-200 text-black font-semibold`}
                >
                  {Menu.title}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default SideBar;
