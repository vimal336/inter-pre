// components/Button.jsx
const Button = ({children, onClick, type = "button", className = "", disabled = false,}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`px-4 py-2 rounded-md font-semibold text-white bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 transition ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
