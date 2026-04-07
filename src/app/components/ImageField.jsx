export const ImageField = (props) => {
  const {
    label,
    placeholder,
    value,
    onChange,
    error,
    type = "text",
    required = false,
  } = props;
  return (
    <div className="space-y-2">
      <label className="font-semibold text-sm">
        {label} {required && <span className="text-[#E14942]">*</span>}
      </label>
      <input type="file" />
      <div
        className="flex flex-col h-45 bg-neutral-200 
      rounded-sm items-center justify-center gap-2"
      >
        <img
          className="flex flex-col w-3 items-center justify-center"
          src="/image.svg"
          alt=""
        />
        <span className="text-sm text-black-100 font-medium"> Add image</span>
      </div>
      {error && <p className="text-sm text-[#E14942]">{error}</p>}
    </div>
  );
};
