import { LockClosedIcon } from "@heroicons/react/20/solid";
import { useForm } from "react-hook-form";
import { loginServices } from "../../services/auth";
import { auth, authLogin } from "../../models/auth";
import { useAppDispatch } from "../../app/hooks";
import { authSlice } from "../../features/auth/authSlice";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { useState } from "react";

export function AuthForm() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm<auth>();
  const [authLogin, setAuthLogin] = useState<authLogin>({
    name: "",
    documento: "",
    token: "",
    cdo: "",
    rol: "",
  });

  function redirectDashboard() {
    dispatch(authSlice.actions.loginSlice(true));
    navigate(`/home`);
  }

  const onSubmit = async (res: auth) => {
    try {
      const _login = await loginServices(res);
      console.log(_login);
      setAuthLogin(_login);
      sessionStorage.setItem(
        "auth",
        JSON.stringify({
          user: _login.token,
          login: true,
          cdo: _login.cdo,
          rol: _login.rol,
        })
      );
      _login.cdo === res.Cdo
        ? redirectDashboard()
        : Swal.fire("Cdo incorrecto");
    } catch (error) {
      Swal.fire("Verifique las credenciales de ingreso");
    }
  };

  return (
    <form className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit)}>
      <div className="-space-y-px rounded-md shadow-sm">
        <div>
          <label htmlFor="Documento" className="sr-only">
            Documento
          </label>
          <input
            id="Documento"
            {...register("Documento")}
            name="Documento"
            type="text"
            pattern="[0-9]+"
            autoComplete="Documento"
            required
            className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
            placeholder="Documento de Identidad"
          />
        </div>
        <div>
          <label htmlFor="Cdo" className="sr-only">
            Centro de Operaciones
          </label>
          <input
            id="Cdo"
            {...register("Cdo")}
            name="Cdo"
            type="text"
            pattern="[0-9]+"
            autoComplete="current-password"
            required
            className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
            placeholder="Centro de Operaciones"
          />
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <input
            id="remember-me"
            name="remember-me"
            type="checkbox"
            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
          />
          <label
            htmlFor="remember-me"
            className="ml-2 block text-sm text-gray-900"
          >
            Remember me
          </label>
        </div>

        <div className="text-sm">
          <button className="font-medium text-indigo-600 hover:text-indigo-500">
            Forgot your password?
          </button>
        </div>
      </div>

      <div>
        <button
          type="submit"
          className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          <span className="absolute inset-y-0 left-0 flex items-center pl-3">
            <LockClosedIcon
              className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
              aria-hidden="true"
            />
          </span>
          Sign in
        </button>
      </div>
    </form>
  );
}
