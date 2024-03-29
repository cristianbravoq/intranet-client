import { useState } from "react";
import { TiTick } from "react-icons/ti";
import Swal from "sweetalert2";
import { ISendEmail } from "../models/email";
import { IDatosPersonales, ISendGiftCard } from "../models/giftCard";
import { sendEmail } from "../services/email";
import { ConsultGiftCard, InsertGiftCard } from "../services/giftCard";
import { FormGiftCard, ValueGiftCard, TokenGiftCard } from "./giftCard";
import "./style.css";
import { useNavigate } from "react-router-dom";

const Stepper = () => {
  const navigate = useNavigate()
  const [content, setContent] = useState(FormGiftCard);

  const steps = [
    { title: "Datos", component: FormGiftCard },
    { title: "Precio", component: ValueGiftCard },
    { title: "Token", component: TokenGiftCard },
  ];
  const [currentStep, setCurrentStep] = useState(1);
  const [complete, setComplete] = useState(false);

  const cambioComponent = () => {
    const dataForm = sessionStorage.getItem("DatosPersonales");
    if(dataForm?.valueOf() === undefined) {
      Swal.fire("Debe llenar los campos");
      return;
    }
    else {
      var _dataForm =JSON.parse(dataForm);
      console.log(_dataForm.nombre)
      if (_dataForm.nombre === "" || _dataForm.telefono === "" || _dataForm.correo === "") {
        Swal.fire("Debe llenar correctamente los campos");
        return;
      }else {

      }
    }
    setContent(steps[currentStep].component);
    currentStep - 1 === steps.length
              ? setComplete(true)
              : setCurrentStep((prev) => prev + 1);
  };

  const Email = async (data: ISendGiftCard) => {
    try {
      const params: ISendEmail = {
        stTo: "",
        stAsunto: "",
        stDestinatario: "",
        stRemitente: "",
        stValor: "",
        stReferencia: "",
      };
      params.stTo = data.correo;
      params.stAsunto = "Gift Card";
      params.stDestinatario = "Persona Destino";
      params.stRemitente = data.nombre;
      params.stValor = data.monto;
      params.stReferencia = data.referencia;
      sendEmail(JSON.stringify(params));
      Swal.fire("Tarjeta de regalo creada y enviada exitosamente");
    } catch (error) {
      throw error;
    }
  };

  const sendGiftCard = async () => {
    const data: ISendGiftCard = JSON.parse(
      sessionStorage.getItem("DatosPersonales") || "{}"
    );
    const insert: boolean = await InsertGiftCard(JSON.stringify(data));
    insert ? Email(data) : Swal.fire("Tarjeta de regalo falló");
    if(insert) {
      navigate("/home");
    }
  };

  const verificarDocPos = async () => {
    const { referencia }: IDatosPersonales = JSON.parse(
      sessionStorage.getItem("DatosPersonales") || "{}"
    );
    var res = ConsultGiftCard(JSON.stringify({ token: referencia }))
      .then((res) => {
        if (res.idCliente) {
          Swal.fire("Documento en Siesa");
          currentStep - 1 === steps.length
              ? setComplete(true)
              : setCurrentStep((prev) => prev + 1);
        };
        if (res.msg === "No existe esta referencia") {
          Swal.fire("Documento no creado en Siesa");
          return;
        }
      })
      .catch((e) => {
        console.log(res);
        setCurrentStep((prev) => prev - 1);
        Swal.fire("Documento no creado en Siesa, debes iniciar de nuevo el proceso");
        return;
      });
  };

  return (
    <div className="bg-slate-300 p-5 rounded-lg text-center w-full h-full">
      <div className="flex justify-between">
        {steps?.map((step, i) => (
          <div
            key={i}
            className={`step-item ${currentStep === i + 1 && "active"} ${
              (i + 1 < currentStep || complete) && "complete"
            } `}
          >
            <div className="step">
              {i + 1 < currentStep || complete ? <TiTick size={24} /> : i + 1}
            </div>
            <p className="text-slate-800">{step.title}</p>
          </div>
        ))}
      </div>

      <div className=" w-full text-center p-5">{content}</div>

      {!complete && (
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => {
            console.log(currentStep);
            if (currentStep <= 2) cambioComponent();
            if (currentStep === 3) verificarDocPos();
            if (currentStep === 4) sendGiftCard();
          }}
        >
          {currentStep - 1 === steps.length ? "Finalizar" : "Siguiente"}
        </button>
      )}
    </div>
  );
};

export default Stepper;
