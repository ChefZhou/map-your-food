const Button = ({ onClick, className, children }) => (
  <button
    onClick={onClick}
    className={`p-2 border-none py-2 px-4 rounded-lg transition-colors duration-300 shadow ${className}`}
  >
    {children}
  </button>
);

export default Button;
