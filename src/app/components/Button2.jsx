export const Button2 = ({ children, disabled, onClick, step }) => {
  const currentStep = step + 1;
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${step === 0 ? "w-full" : "min-w-70"}  h-11 bg-black border rounded-lg text-white cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed`}
    >
      {children}
      <div className="flex items-center justify-center">
        {/* <p className="w-10 flex">`Continue ${setStep} / 3`</p> */}
        Continue {currentStep}/3
        <img className="w-7" src="/next2.svg" alt="" />
      </div>
    </button>
  );
};
