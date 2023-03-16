import { ISession } from "../models/auth";
import { ISendGiftCard } from "../models/giftCard";

const dataInsert = {
  nombre: "",
  telefono: "",
  correo: "",
  monto: "",
  referencia: "",
  fecha: "",
  co: "",
};

function generate_token() {
  var length = 7;
  //edit the token allowed characters
  var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890#$%&=?".split("");
  var b = [];
  for (var i = 0; i < length; i++) {
    var j: any = (Math.random() * (a.length - 1)).toFixed(0);
    b[i] = a[j];
  }
  return b.join("");
}

function GenerarToken() {
  const data: ISendGiftCard = JSON.parse(
    sessionStorage.getItem("DatosPersonales") || "{}"
  );
  const { cdo }: ISession = JSON.parse(sessionStorage.getItem("auth") || "{}");
  const CdO = cdo.split("");

  const token =
    CdO[0] === "1" ? "S" + generate_token() : "O" + generate_token();
  var fecha = Date();

  dataInsert.nombre = data.nombre;
  dataInsert.telefono = data.telefono;
  dataInsert.correo = data.correo;
  dataInsert.monto = data.monto;
  dataInsert.referencia = token;
  dataInsert.fecha = fecha.toString().slice(0, 24);
  dataInsert.co = cdo;
  sessionStorage.setItem("DatosPersonales", JSON.stringify(dataInsert));
  return token;
}

export default GenerarToken;
