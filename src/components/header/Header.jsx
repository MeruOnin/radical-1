import { Link } from "react-router-dom";
import "./Header.css";
import NormalBtn from "../butttons/Normal/NormalBtn";

const Header = () => {
  return (
    <header className="m-4 flex items-center justify-end">
      <section className="">
        <NormalBtn title={`تغییر کد ورودی`} path={`/`} />
      </section>
    </header>
  );
};

export default Header;
