import { TextField } from "./TextField";
import { Button } from "./Button";
import { Logo } from "./Logo";
import { Button2 } from "./Button2";

export const SecondStep = ({
  handleNextStep,
  handlePrevStep,
  form,
  setForm,
  errors,
  setErrors,
  step,
  // isHavingError,
}) => {
  // const [email, setEmail] = useState("");
  // const [phone, setPhonenumber] = useState("");
  // const [password, setPassword] = useState("");

  const isEmailValid = (value) => {
    if (value === "") return "Email cannot be empty...";
    if (!/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/.test(value))
      return "Plaese provide a valid email address";
  };
  const isPhonenumberValid = (value) => {
    if (value === "") return "Phone cannot be empty...";
    if (!/^[0-9]{8}$/.test(value)) return "Please enter a valid phone number";
  };
  const isPasswordValid = (value) => {
    // isPasswordValid = s;
    if (value === "") return "Password cannot be empty...";
    if (!/^.{8,}$/.test(value))
      return "Password must include letters and numbers";
  };
  const isPassword2Valid = (value) => {
    // isPasswordValid = s;
    if (value !== form.password) return "Password cannot be empty...";
    if (!/^.{8,}$/.test(value)) return "Password do not match. Plase try again";
  };
  // const Passincorrect = () => {
  // return (isHavingError = () => {
  //   if (password !== password2)
  //      return
  //     disabled={isHavingError()};
  // });

  const isHavingError = () => {
    return (
      isEmailValid(form.email) ||
      isPhonenumberValid(form.phone) ||
      isPasswordValid(form.password) ||
      isPassword2Valid(form.password2)
    );
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
          <div className=" flex flex-col justify-between  min-h-62.5 gap-4">
            <TextField
              value={form.email}
              onChange={(e) => {
                // setEmail(e.target.value);
                setErrors({
                  ...errors,
                  email: isEmailValid(e.target.value),
                });
                setForm({ ...form, email: e.target.value });
              }}
              error={errors.email}
              required={true}
              label="Email"
              placeholder="@gmail.com"
            />

            <TextField
              value={form.phone}
              onChange={(e) => {
                setErrors({
                  ...errors,
                  phone: isPhonenumberValid(e.target.value),
                });
                setForm({ ...form, phone: e.target.value });
              }}
              error={errors.phone}
              required={true}
              label="Phone"
              placeholder="phone..."
            />

            <TextField
              type="password"
              value={form.password}
              onChange={(e) => {
                setErrors({
                  ...errors,
                  password: isPasswordValid(e.target.value),
                });
                setForm({ ...form, password: e.target.value });
              }}
              error={errors.password}
              required={true}
              label="Password"
              placeholder="pass . . ."
            />

            <TextField
              type="password"
              value={form.password2}
              onChange={(e) => {
                setErrors({
                  ...errors,
                  password2: isPassword2Valid(e.target.value),
                });
                setForm({ ...form, password2: e.target.value });
              }}
              error={errors.password2}
              required={true}
              label="Confirm password"
              placeholder="pass . . ."
            />
          </div>
        </div>
        <div className="flex justify-between   ">
          <Button onClick={handlePrevStep}>{/* <Previcon /> */}</Button>
          <Button2
            onClick={handleNextStep}
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
