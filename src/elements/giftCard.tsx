import { useEffect } from "react";
import { useForm } from "react-hook-form";

const people = [
  { name: "Wade Cooper" },
  { name: "Arlene Mccoy" },
  { name: "Devon Webb" },
  { name: "Tom Cook" },
  { name: "Tanya Fox" },
  { name: "Hellen Schmidt" },
];

export function FormGiftCard() {
  return (
    <form className="mt-8 space-y-6">
      <div className="-space-y-px rounded-md shadow-sm">
        <div>
          <label htmlFor="user" className="sr-only">
            Nombre
          </label>
          <input
            id="user"
            name="user"
            type="text"
            autoComplete="user"
            required
            className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
            placeholder="Nombre"
          />
        </div>
        <div>
          <label htmlFor="password" className="sr-only">
            Telefono
          </label>
          <input
            id="cdo"
            name="cdo"
            type="text"
            pattern="[0-9]+"
            autoComplete="current-password"
            required
            className="relative block w-full appearance-none rounded-none border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
            placeholder="Telefono"
          />
        </div>
        <div>
          <label htmlFor="password" className="sr-only">
            Email
          </label>
          <input
            id="cdo"
            name="cdo"
            type="text"
            pattern="[0-9]+"
            autoComplete="current-password"
            required
            className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
            placeholder="Email"
          />
        </div>
      </div>
    </form>
  );
}

export function ValueGiftCard() {
  return (
    <form className="mt-8 space-y-6">
      <div className="-space-y-px rounded-md shadow-sm">
        <div>
          <label htmlFor="user" className="sr-only">
            Valor
          </label>
          <input
            id="user"
            name="user"
            type="text"
            autoComplete="user"
            required
            className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
            placeholder="Valor de Gift Card"
          />
        </div>
      </div>
    </form>
  );
}

export function TokenGiftCard() {
  return (
    <p className="w-full rounded-none rounded-t-md border bg-white border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
      Token de la gift card
    </p>
  );
}

export function TableGiftCard() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (res: any) => {
    console.log(res)
  };

  return (
    <div className='bg-slate-300 p-5 rounded-lg text-center'>
      <form className="w-full mb-4 flex" onSubmit={handleSubmit(onSubmit)}>
        <input
          className="w-full placeholder:text-slate-500 bg-slate-300 rounded-l-lg p-2 text-slate-900 border-2 border-y-slate-400 border-l-slate-400"
          placeholder="Ingrese token de identificacion"
          type="text"
          id="token"
          {...register("token")}
          name="token"
        />
        <button type="submit"className="bg-slate-300 rounded-r-lg p-2 text-slate-900 border-2 border-y-slate-800 border-r-slate-800 border-l-slate-900 hover:bg-slate-100">
          Buscar
        </button>
      </form>
      <table className="w-full">
        <thead className="text-center border-b border-slate-500">
          <tr>
            <th className="w-1/3">Valor actual</th>
            <th className="w-1/4">Valor inicial</th>
            <th className="w-1/3">Fecha de consumo</th>
          </tr>
        </thead>
        <tbody className="">
          <tr className="divide-x divide-slate-500 text-center">
            <td>Token</td>
            <td className="">Adam</td>
            <td>858</td>
          </tr>
          <tr className="divide-x divide-slate-500 text-center">
            <td>A Long and Winding</td>
            <td>Adam</td>
            <td>112</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
