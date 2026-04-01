"use client";
import { useState } from "react";
// import { Logo } from "./components/Logo";
import { TextField } from "./components/TextField";

export default function Home() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");

  const isFirstNameValid = () => {
    if (firstname === "") return "First name cannot be empty...";
    if (!/^[A-Za-z-]+$/.test(firstname))
      return "First name cannot contain special characters or numbers.";
  };

  return (
    <div className="w-full h-screen flex justify-center items-center bg-[#f4f4f4]">
      <div className="w-120 min-h-[655px] bg-white rounded-lg p-8 shadow-xl">
        <div className="space-y-2">
          {/* <Logo /> */}
          <h1 className="font-semibold text-2xl">Join Us! 😎</h1>
          <p className="text-lg text-[#8E8E8E]">
            Please provide all current information accurately.
          </p>

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
            required={true}
            label="Last name"
            placeholder="Doe..."
          />
        </div>
      </div>
    </div>
  );
}
