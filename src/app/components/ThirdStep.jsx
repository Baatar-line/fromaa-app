import { TextField } from "./TextField";
import { Button } from "./Button";
import { ImageField } from "./ImageField";
import { Logo } from "./Logo";
import { formatDynamicAPIAccesses } from "next/dist/server/app-render/dynamic-rendering";
import { Button2 } from "./Button2";

export const ThirdStep = ({
  handleNextStep,
  handlePrevStep,
  form,
  setForm,
  errors,
  setErrors,
  step,
}) => {
  // const [date, setDate] = useState("");
  // const [image, setImage] = useState("");

  const isDateValid = (value) => {
    if (value === "") return "Please select a date.";
  };
  const isImageValid = (value) => {
    if (value === "") return "Please select a date.";
  };

  const isHavingError = () => {
    return isDateValid(form.date) || isImageValid(form.image);
  };
  const handleReset = () => {
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
              value={form.date}
              onChange={(e) => {
                isDateValid(e.target.value);
                setErrors({ ...errors, date: isDateValid(e.target.value) });
                setForm({ ...form, date: e.target.value });
              }}
              error={errors.date}
              required={true}
              label="Birthday"
            />
            <ImageField
              value={form.image}
              onChange={(e) => {
                isImageValid(e.target.value);
                setErrors({
                  ...errors,
                  image: isImageValid(e.target.value),
                });
                const imageValue = URL.createObjectURL(e.target.files[0]);
                setForm({ ...form, image: imageValue });
              }}
              onCancel={() => {
                setForm({ ...form, image: "" });
                isImageValid(form.image);
              }}
              error={errors.image}
              required={true}
              label="Profile Image"
            />
          </div>
        </div>
        <div className="flex justify-between   ">
          <Button onClick={handlePrevStep}>{/* <Previcon /> */}</Button>
          <Button2
            onClick={() => {
              handleNextStep();
              handleReset();
            }}
            disabled={isHavingError()}
            step={step}
          >
            {/* <Nexticon /> */}
          </Button2>
        </div>
      </div>
    </div>
  );
};
