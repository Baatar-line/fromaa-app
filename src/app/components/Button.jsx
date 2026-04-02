export const Button = ({ children, disabled }) => {
  return (
    <button
      disabled={disabled}
      className="w-[416] h-11 bg-black border rounded-lg text-white cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
    >
      {children}
    </button>
  );
};
