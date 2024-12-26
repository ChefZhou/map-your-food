const Button = ({ onClick, className, children }) => (
  <button
    onClick={onClick}
    className={`bg-[#ff7a59] text-[#fffdf5] border-none py-2 px-4 rounded-lg transition-colors duration-300 shadow hover:bg-[#e86a48] ${className}`}
  >
    {children}
  </button>
);

export default Button;
