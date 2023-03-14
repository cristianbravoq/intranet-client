import { ArrowLongRightIcon } from "@heroicons/react/20/solid";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

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
    <>
      <div
        className={` ${
          open ? "sm:w-72 w-full" : "sm:w-20 w-12"
        } bg-gray-800 h-full p-5 pt-8 fixed duration-500 flex flex-col`}
      >
        <div
          className={`absolute flex cursor-pointer -right-5 top-6 w-7 rounded-full p-5 bg-green-600 justify-center items-center hover:scale-105`}
          onClick={() => stateOpenSidebar()}
        >
          <ArrowLongRightIcon
            className={`absolute h-5 w-5 text-stone-100 rounded-full ease-out duration-700 hover:scale-150 ${
              open && "rotate-180"
            }`}
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
            <img
              className="mx-auto h-20 w-auto"
              alt="Your Company"
              src={logo}
            />
            Creaciones Nadar
          </h1>
        </div>
        <ul className="py-6">
          {Menus.map((Menu, index) => (
            <li
              key={index}
              className={`flex rounded-md p-1 cursor-pointer hover:scale-110 text-gray-300 hover:text-gray-800 text-sm items-center gap-x-4 
                  ${Menu.gap ? "mt-32" : "mt-2"} ${
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
    </>
  );
}

export default SideBar;
