import { useState } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { ISendGiftCard } from "../models/giftCard";
import { GetGiftCard } from "../services/giftCard";
import GenerarToken from "../services/tokenGiftCard";

const dataInsert = {
  nombre: "",
  telefono: "",
  correo: "",
  monto: "",
  referencia: "",
};

export function FormGiftCard() {
  const Submit = () => {
    const all = document.querySelectorAll("input");

    dataInsert.nombre = all[0].value;
    dataInsert.telefono = all[1].value;
    dataInsert.correo = all[2].value;

    sessionStorage.setItem("DatosPersonales", JSON.stringify(dataInsert));
  };

  return (
    <form className="mt-8 space-y-6">
      <div className="-space-y-px rounded-md shadow-sm">
        <div>
          <label htmlFor="nombre" className="sr-only">
            Nombre
          </label>
          <input
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
            onChange={Submit}
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
            onChange={Submit}
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
  const Submit = () => {
    const all = document.querySelectorAll("input");
    const _dataInsert: ISendGiftCard = JSON.parse(
      sessionStorage.getItem("DatosPersonales") || "{}"
    );

    dataInsert.nombre = _dataInsert.nombre;
    dataInsert.telefono = _dataInsert.telefono;
    dataInsert.correo = _dataInsert.correo;
    dataInsert.monto = all[0].value;

    sessionStorage.setItem("DatosPersonales", JSON.stringify(dataInsert));
  };

  return (
    <form className="mt-8 space-y-6">
      <div className="-space-y-px rounded-md shadow-sm">
        <div>
          <label htmlFor="valor" className="sr-only">
            Valor
          </label>
          <input
            onChange={Submit}
            id="valor"
            name="valor"
            type="number"
            autoComplete="valor"
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
  const token = GenerarToken();

  const copy = () => {
    navigator.clipboard.writeText(token.toUpperCase());
    Swal.fire("Token copiado en el portapapeles");
  };

  return (
    <div
      className="rounded-md border bg-white border-gray-300"
      onClick={() => copy()}
    >
      <div className="m-4">
        <h4>Click para copiar</h4>
        <p className="w-full rounded-md border bg-slate-300 border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm font-semibold">
          {token.toUpperCase()}
        </p>
      </div>
    </div>
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
          required
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