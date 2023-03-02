import { LockClosedIcon, BookOpenIcon } from "@heroicons/react/20/solid";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Menus = [
  { title: "Capacitaciones", src: "Search" },
  { title: "Comercial", src: "Chart_fill" },
  { title: "Rappi", src: 'Chat' },
  { title: "Sistemas", src: 'Chat', gap: true },
  { title: "Gif Cards", src: "User", gap: true },
  /* { title: "Configuracion", src: Setting }, */
];



function SideBar() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  function menusNavigate(title: string) {
    if (title === "Capacitaciones") navigate(`/`);
    if (title === "Salir") navigate(`/SignIn`);
  }

  return (
    <>
      <div
        className={` ${
          open ? "sm:w-72 w-full" : "sm:w-20 w-10"
        } bg-slate-900 h-full p-5 pt-8 fixed duration-500 flex flex-col justify-between`}
      >
        <button
          className={`absolute cursor-pointer -right-3 top-9 w-7 rounded-full  ${
            !open && "rotate-180"
          }`}
          onClick={() => setOpen(!open)}
        >
          <span className="absolute inset-y-0 left-0 flex items-center pl-3">
            <LockClosedIcon
              className="h-5 w-5  text-red-700 group-hover:text-indigo-400"
              aria-hidden="true"
            />
          </span>
        </button>
        <div className="flex gap-x-4 items-center justify-center hover:scale-90">
          <img
            className={`cursor-pointer duration-500 ${
              open && "rotate-[360deg]"
            }`}
          />
          {/* <h1
                className={`text-white origin-left font-medium text-xl duration-200 ${
                  !open && "scale-0"
                }`}
              >
                P<small>ay</small>4F<small>ood</small>
              </h1> */}
        </div>
        <ul className="py-6">
          {Menus.map((Menu, index) => (
            <li
              key={index}
              className={`flex rounded-md p-2 cursor-pointer hover:bg-light-white hover:scale-110  hover:bg-slate-500 text-gray-300 hover:text-gray-800 text-sm items-center gap-x-4 
                  ${Menu.gap ? "mt-40" : "mt-2"} ${
                index === 0 && "bg-light-white"
              } `}
            >
              <div
                className="w-full flex items-center gap-4"
                onClick={() => menusNavigate(Menu.title)}
              >
                <img src={Menu.src} />
                <span
                  className={`${!open && "hidden"} origin-left duration-200`}
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
