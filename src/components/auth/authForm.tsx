import { LockClosedIcon } from "@heroicons/react/20/solid";
import { useForm } from "react-hook-form";

export function AuthForm() {
  const { register, handleSubmit } = useForm();

  const onSubmit = () => {};

  return (
    <form className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit)}>
      <div className="-space-y-px rounded-md shadow-sm">
        <div>
          <label htmlFor="user" className="sr-only">
            Documento
          </label>
          <input
            id="user"
            {...register("user")}
            name="user"
            type="text"
            pattern="[0-9]+"
            autoComplete="user"
            required
            className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
            placeholder="Documento de Identidad"
          />
        </div>
        <div>
          <label htmlFor="password" className="sr-only">
            Centro de Operaciones
          </label>
          <input
            id="cdo"
            {...register("cdo")}
            name="cdo"
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
          <button
            className="font-medium text-indigo-600 hover:text-indigo-500"
          >
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
