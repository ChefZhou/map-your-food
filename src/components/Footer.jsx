import { IoLogoGithub } from "react-icons/io";

function Footer() {
  return (
    <footer className="bg-gray-800 text-white p-2 sm:p-3 md:p-4 fixed bottom-0 left-0 w-full z-50 text-center h-[40px]">
      <p className="text-sm sm:text-base md:text-base flex items-center justify-center gap-2">
        © 2024 Denny Zhou's product
        <a
          href="https://github.com/ChefZhou"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-400 transition-colors"
        >
          <IoLogoGithub />
        </a>
      </p>
    </footer>
  );
}

export default Footer;
