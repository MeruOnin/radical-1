import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="m-4 flex items-center justify-between">
      <section className="flex items-center justify-between">
        <img
          src="src/assets/radical-logo-white.png"
          className="w-16 h-16"
          alt="header logo"
        />
        <span className="text-3xl mr-4 text-background-elm">رادیکال</span>
      </section>
      <section>
        <Link
          to={`/`}
          className="bg-transparent p-3 rounded-xl flex items-center justify-center border-1 border-background-elm text-background-elm"
        >
          <i className="fi fi-tr-replace ml-3 flex items-center justify-center"></i>
          تغییر کد ورود
        </Link>
      </section>
    </header>
  );
};

export default Header;
