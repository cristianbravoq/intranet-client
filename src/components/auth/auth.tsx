import "./authStyle.css";
import { AuthForm } from "./authForm";
import { Copyright } from "../../elements/copyright";

import logo from "../../assets/img/LogoNadar.png";
import { useAppDispatch } from "../../app/hooks";
import { sidebarSlice } from "../../features/sidebar/sidebarSlice";

function Auth() {
  const dispatch = useAppDispatch();
  dispatch(sidebarSlice.actions.openSlice(false));
  return (
    <div className="w-full h-screen contenedor-auth flex flex-col items-center justify-center">
      <div className="flex items-center w-11/12 justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8 backdrop-blur-sm bg-slate-200 border-2 border-x-red-600 rounded-lg p-5">
          <div>
            <img
              className="mx-auto h-32 w-auto"
              alt="Your Company"
              src={logo}
            />
            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
              Creaciones Nadar
            </h2>
            <div className="mt-2 text-center">
              <button
                className="font-medium text-indigo-600 hover:text-indigo-500"
              >
                Speedo
              </button>
              {", "}
              <button
                className="font-medium text-indigo-600 hover:text-indigo-500"
              >
                Oneill
              </button>
            </div>
          </div>
          <AuthForm />
        </div>
      </div>
      <div className="text-center">
        <Copyright />
      </div>
    </div>
  );
}

export default Auth;
