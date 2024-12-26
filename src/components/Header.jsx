import Navbar from "./Navbar";

function Header() {
  return (
    <header className="bg-[#ff7a59] text-[#fffdf5] fixed top-0 left-0 w-full p-2 sm:p-3 md:p-4 lg:p-4 z-50 h-[60px]">
      <Navbar />
    </header>
  );
}

export default Header;
