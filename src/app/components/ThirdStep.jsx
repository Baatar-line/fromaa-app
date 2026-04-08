import React, { useState } from "react";
import { TextField } from "./TextField";
import { Button } from "./Button";
import { ImageField } from "./ImageField";
import { Prev, Previcon } from "./Previcon";
import { Nexticon } from "./Nexticon";
import { Logo } from "./Logo";
import { formatDynamicAPIAccesses } from "next/dist/server/app-render/dynamic-rendering";

export const ThirdStep = ({
  handleNextStep,
  handlePrevStep,
  form,
  setForm,
}) => {
  // const [date, setDate] = useState("");
  // const [image, setImage] = useState("");

  const isDateValid = () => {
    if (form.date === "") return "Please select a date.";
  };
  const isImageValid = () => {
    if (form.image === "") return "Image cannot be blank";
  };

  const isHavingError = () => {
    return isDateValid() || isImageValid();
  };
  return (
    <div className="w-120 min-h-163.75 bg-white rounded-lg p-8 shadow-xl">
      <Logo />
      <div className="space-y-2">
        {/* <Logo /> */}
        <h1 className="font-semibold text-2xl">Join Us! 😎</h1>
        <p className="text-lg text-[#8E8E8E]">
          Please provide all current information accurately.
        </p>
        <div className="flex flex-col justify-between min-h-112.5">
          <div className=" flex flex-col justify-between  min-h-62.5 gap-5">
            <TextField
              type="date"
              //   value={form.birthday}
              onChange={(e) => {
                setForm({ ...form, birthday: e.target.value });
              }}
              error={isDateValid}
              required={true}
              label="Birthday"
            />
            <ImageField
              value={form.image}
              onChange={(e) => {
                const imageValue = URL.createObjectURL(e.target.files[0]);
                setForm({ ...form, image: imageValue });
              }}
              error={isImageValid}
              required={true}
              label="Profile Image"
            />
          </div>
        </div>
        <div className="flex justify-between   ">
          <Button className=" w-32px" onClick={handlePrevStep}>
            <Previcon />
          </Button>
          <Button
            className="w-70"
            onClick={handleNextStep}
            disabled={isHavingError()}
          >
            <Nexticon />
          </Button>
        </div>
      </div>
    </div>
  );
};
