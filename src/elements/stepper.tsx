import { useState } from "react";
import { TiTick } from "react-icons/ti";
import Swal from "sweetalert2";
import { FormGiftCard, ValueGiftCard, TokenGiftCard } from "./giftCard";
import "./style.css";

const Stepper = () => {

  const [content, setContent] = useState(FormGiftCard);

  const steps = [
    { title: "Información", component: FormGiftCard },
    { title: "Precio", component: ValueGiftCard },
    { title: "Token", component: TokenGiftCard },
  ];
  const [currentStep, setCurrentStep] = useState(1);
  const [complete, setComplete] = useState(false);

  const cambioComponent = () => {
      setContent(steps[currentStep].component)
  }

  const sendGiftCard = () => {
    Swal.fire("Tarjeta de regalo creada exitosamente");
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
            if(currentStep <= 2) cambioComponent();
            if(currentStep === 4) sendGiftCard();
            currentStep - 1 === steps.length
              ? setComplete(true)
              : setCurrentStep((prev) => prev + 1);
          }}
        >
          {currentStep - 1 === steps.length ? "Finalizar" : "Siguiente"}
        </button>
      )}
    </div>
  );
};

export default Stepper;
