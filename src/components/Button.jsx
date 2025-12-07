const Button = ({
  label,
  iconURL,
  backgroundColor = "bg-coral-red",
  borderColor = "border-coral-red",
  textColor = "text-white",
  fullWidth = false,
}) => {
  return (
    <button
      className={`flex justify-center items-center gap-2 px-7 py-4 border text-nowrap font-montserrat text-lg leading-none ${backgroundColor} rounded-full ${textColor} ${borderColor} cursor-pointer transition-transform duration-300 hover:scale-105 active:scale-95 ${
        fullWidth ? "w-full" : ""
      }`}
    >
      {label}
      {iconURL && (
        <img src={iconURL} alt={label} className="ml-2 rounded-full w-5 h-5" />
      )}
    </button>
  );
};

export default Button;
