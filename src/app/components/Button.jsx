export const Button = ({ children, disabled, onClick }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className="   min-w-30 h-11 bg-black border rounded-lg text-white cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
    >
      {children}
      <div className="flex items-center justify-center">
        <img className="w-7" src="/prev.svg" alt="" />
        <p className="w-10">BACK</p>
      </div>
    </button>
  );
};
