import "./authStyle.css";
import { AuthForm } from "./authForm";
import { Copyright } from "../../elements/copyright";

import logo from "../../assets/img/LogoNadar.png";

function Auth() {
  return (
    <div className="w-full h-screen contenedor-auth">
      <div className="flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8 backdrop-blur-sm bg-slate-200 rounded-lg p-5">
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
