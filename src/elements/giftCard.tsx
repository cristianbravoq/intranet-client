import { useState } from "react";
import { useForm } from "react-hook-form";
import { GetGiftCard } from "../services/giftCard";

export function FormGiftCard() {

  //const { register, handleSubmit } = useForm();
  const Submit = () => {
    console.log("res")
    var x1 = document.getElementsByName("nombre")
    console.log(x1)
  };

  return (
    <form className="mt-8 space-y-6">
      <div className="-space-y-px rounded-md shadow-sm">
        <div>
          <label htmlFor="nombre" className="sr-only">
            Nombre
          </label>
          <input
            //{...register("nombre")}
            onChange={Submit}
            id="nombre"
            name="nombre"
            type="text"
            autoComplete="nombre"
            required
            className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
            placeholder="Nombre"
          />
        </div>
        <div>
          <label htmlFor="telefono" className="sr-only">
            Telefono
          </label>
          <input
            //{...register("telefono")}
            id="telefono"
            name="telefono"
            type="text"
            pattern="[0-9]+"
            autoComplete="telefono"
            required
            className="relative block w-full appearance-none rounded-none border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
            placeholder="Telefono"
          />
        </div>
        <div>
          <label htmlFor="correo" className="sr-only">
            Correo
          </label>
          <input
            //{...register("correo")}
            id="correo"
            name="correo"
            type="text"
            pattern="[0-9]+"
            autoComplete="current-password"
            required
            className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
            placeholder="Correo"
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
  interface dataGiftCard {
    valorIngreso: string;
    valorEgreso: string;
    idGiftCard: string;
  }

  const { register, handleSubmit } = useForm();
  const [_data, setData] = useState<Array<dataGiftCard>>();

  const onSubmit = async (res: any) => {
    GetGiftCard(JSON.stringify(res)).then((res) => setData(res));
  };

  return (
    <div className="bg-slate-300 p-5 rounded-lg text-center">
      <form className="w-full mb-4 flex" onSubmit={handleSubmit(onSubmit)}>
        <input
          className="w-full placeholder:text-slate-500 bg-slate-300 rounded-l-lg p-2 text-slate-900 border-2 border-y-slate-400 border-l-slate-400"
          placeholder="Ingrese token de identificacion"
          type="text"
          id="token"
          {...register("token")}
          name="token"
        />
        <button
          type="submit"
          className="bg-slate-300 rounded-r-lg p-2 text-slate-900 border-2 border-y-slate-800 border-r-slate-800 border-l-slate-900 hover:bg-slate-100"
        >
          Buscar
        </button>
      </form>
      <table className="w-full">
        <thead className="text-center border-b border-slate-500">
          <tr>
            <th className="w-1/3">Valor Egreso</th>
            <th className="w-1/4">Valor Ingreso</th>
            <th className="w-1/3">Token</th>
          </tr>
        </thead>
        <tbody>
          {_data?.map((res: dataGiftCard, i: any) => (
            <tr key={i} className="divide-x divide-slate-500 text-center">
              <td>{res.valorEgreso}</td>
              <td>{res.valorIngreso}</td>
              <td>{res.idGiftCard.toUpperCase()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
