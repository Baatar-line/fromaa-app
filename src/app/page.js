"use client";
import { useState } from "react";
import { FirstStep } from "./components/FirstStep";
import { SecondStep } from "./components/SecondStep";
import { ThreeStep } from "./components/ThreeStep";

export default function Home() {
  const [step, setStep] = useState(1);
  const steps = [FirstStep, SecondStep, ThreeStep];
  const [form, setForm] = useState({
    firstname: "",
    lastname: "",
    Username: "",
    email: "",
    birthday: "",
    image: "",
  });

  const handleNextStep = () => {
    setStep(step + 1);
  };
  const handlePrevStep = () => {
    setStep(step - 1);
  };
  const StepForm = steps[step];
  return (
    <div className="w-full h-screen flex justify-center items-center bg-[#f4f4f4]">
      <StepForm
        form={form}
        setForm={setForm}
        handleNextStep={handleNextStep}
        handlePrevStep={handlePrevStep}
      />
    </div>
  );
}
