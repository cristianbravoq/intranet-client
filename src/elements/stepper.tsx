import { useEffect, useState } from "react";
import { TiTick } from "react-icons/ti";
import { FormGiftCard, ValueGiftCard, TokenGiftCard } from "./giftCard";
import "./style.css";

const Stepper = () => {

  const [content, setContent] = useState(() => <></>);
  
  const steps = [
    { title: "Customer Info", component: FormGiftCard },
    { title: "Shipping Info", component: ValueGiftCard },
    { title: "Payment", component: TokenGiftCard },
  ];
  const [currentStep, setCurrentStep] = useState(1);
  const [complete, setComplete] = useState(false);

  useEffect(() => {
    steps.length >= currentStep
      ? setContent(steps[currentStep - 1].component)
      : sendGiftCard();
    console.log(currentStep);
  }, [currentStep]);

  const sendGiftCard = () => {
    alert("Mensaje");
  };

  return (
    <>
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
            <p className="text-gray-500">{step.title}</p>
          </div>
        ))}
      </div>

      <div className=" w-full text-center p-5">{content}</div>

      {!complete && (
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => {
            currentStep - 1 === steps.length
              ? setComplete(true)
              : setCurrentStep((prev) => prev + 1);
          }}
        >
          {currentStep - 1 === steps.length ? "Finish" : "Next"}
        </button>
      )}
    </>
  );
};

export default Stepper;
