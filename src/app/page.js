"use client";
import { useEffect, useState } from "react";
import { FirstStep } from "./components/FirstStep";
import { SecondStep } from "./components/SecondStep";
import { ThirdStep } from "./components/ThirdStep";
import { FourStep } from "./components/FourStep";

export default function Home() {
  const [step, setStep] = useState(0);
  const steps = [FirstStep, SecondStep, ThirdStep, FourStep];
  const [form, setForm] = useState(null);
  const [errors, setErrors] = useState({
    firstname: "",
    lastname: "",
    Username: "",
    email: "",
    birthday: "",
    image: "",
    date: "",
    password: "",
    password2: "",
  });
  useEffect(() => {
    if (form !== null) {
      localStorage.setItem("form", JSON.stringify(form));
    } else {
      const storedForm = JSON.parse(localStorage.getItem("form"));
      if (storedForm) {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setForm(storedForm);
      } else {
        setForm({
          firstname: "",
          lastname: "",
          username: "",
          email: "",
          birthday: "",
          image: "",
          date: "",
          password: "",
          password2: "",
        });
      }
    }
  }, [form]);
  const isHavingError = () => {
    if (handleNextStep == "")
      return (
        isEmailValid() ||
        isPhonenumberValid() ||
        isPasswordValid() ||
        isPassword2Valid()
      );
    if (handleNextStep !== isHavingError) return setStep(step + 1);
  };
  const handleNextStep = () => {
    setStep(step + 1);
  };
  const handlePrevStep = () => {
    setStep(step - 1);
  };
  const StepForm = steps[step];
  if (!form) return null;
  return (
    <div className="w-full h-screen flex justify-center items-center bg-[#f4f4f4]">
      <StepForm
        step={step}
        form={form}
        errors={errors}
        setErrors={setErrors}
        setForm={setForm}
        handleNextStep={handleNextStep}
        handlePrevStep={handlePrevStep}
        isHavingError={isHavingError}
      />
    </div>
  );
}
