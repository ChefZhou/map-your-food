function Button({ children }) {
  return (
    <button className="bg-[#ff7a59] text-[#fffdf5] border-none py-2 px-4 rounded transition-colors duration-300 hover:bg-[#e86a48]">
      {children}
    </button>
  );
}

export default Button;
