function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-5 px-2 text-center fixed bottom-0 w-full z-50">
      <p>© 2024 Denny's product</p>
      <div>
        <a
          href="#"
          className="text-yellow-400 no-underline mx-1 transition-colors duration-300 hover:text-orange-500"
        >
          Link 1
        </a>
        <a
          href="#"
          className="text-yellow-400 no-underline mx-1 transition-colors duration-300 hover:text-orange-500"
        >
          Link 2
        </a>
      </div>
    </footer>
  );
}

export default Footer;
