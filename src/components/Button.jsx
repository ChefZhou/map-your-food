const Button = ({ onClick, className, children }) => (
  <button
    onClick={onClick}
    className={`
      bg-[#ff7a59] 
      text-[#fffdf5] 
      border-none 
      py-1.5 
      px-3 
      sm:py-1.5 
      sm:px-3.5 
      md:py-2 
      md:px-4 
      text-sm 
      sm:text-base 
      md:text-base 
      rounded-lg 
      transition-colors 
      duration-300 
      shadow 
      hover:bg-[#e86a48] 
      ${className}
    `}
  >
    {children}
  </button>
);

export default Button;
