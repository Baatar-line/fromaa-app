"use client";
import { useState } from "react";
// import { Logo } from "./components/Logo";
import { TextField } from "./components/TextField";
import { Button } from "./components/Button";

export default function Home() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [Usename, setUsename] = useState("");

  const isFirstNameValid = () => {
    if (firstname === "") return "First name cannot be empty...";
    if (!/^[A-Za-z-]+$/.test(firstname))
      return "First name cannot contain special characters or numbers.";
  };
  const isLastNameValid = () => {
    if (lastname === "") return "Last name cannot be empty...";
    if (!/^[A-Za-z-]+$/.test(lastname))
      return "Last name cannot contain special characters or numbers.";
  };
  const isUseNameValid = () => {
    if (Usename === "") return "Use name cannot be empty...";
    if (!/^[a-z0-9]+$/.test(Usename))
      return "Usename can only contain lowercase letters and digits only";
  };
  const isHavingError = () => {
    return isFirstNameValid() || isLastNameValid() || isUseNameValid();
  };

  // const filteredTasks = tasks.filter((task) => {
  //   if (currentFilter === "isFirstNameValid") return !task.completed;
  //   if (currentFilter === "isLastNameValid") return !task.completed;
  //   if (currentFilter === "isUseNameValid") return task.completed;
  //   return true;
  // });

  // // ✅ Эдгээр мөрүүдийг filteredTasks-ийн дараа нэмэх
  // const completedCount = tasks.filter((t) => t.completed).length;
  // const totalCount = tasks.length;
  return (
    <div className="w-full h-screen flex justify-center items-center bg-[#f4f4f4]">
      <div className="w-120 min-h-[655px] bg-white rounded-lg p-8 shadow-xl">
        <div className="space-y-2">
          {/* <Logo /> */}
          <h1 className="font-semibold text-2xl">Join Us! 😎</h1>
          <p className="text-lg text-[#8E8E8E]">
            Please provide all current information accurately.
          </p>
          <div className="flex flex-col justify-between min-h-[450px]">
            <div className=" flex flex-col justify-between  min-h-[250px]">
              <TextField
                value={firstname}
                onChange={(e) => {
                  setFirstname(e.target.value);
                }}
                error={isFirstNameValid()}
                required={true}
                label="First name"
                placeholder="John..."
              />

              <TextField
                value={lastname}
                onChange={(e) => {
                  setLastname(e.target.value);
                }}
                error={isLastNameValid()}
                required={true}
                label="Last name"
                placeholder="Doe..."
              />

              <TextField
                value={Usename}
                onChange={(e) => {
                  setUsename(e.target.value);
                }}
                error={isUseNameValid()}
                required={true}
                label="Use name"
                placeholder="Jon"
              />
            </div>
          </div>
          <Button disabled={isHavingError()}>NEXT</Button>
        </div>
      </div>
    </div>
  );
}
