import "./Services.css";
import { useEffect, useState } from "react";

const Services = () => {
  const [selected, setSelected] = useState("services");

  useEffect(() => {
    if (selected === "services") {
      // Do something if "services" is selected
    } else {
      console.log(false);
    }
  }, [selected]);

  const ourServices = [
    {
      title: "طراحی وبسایت شرکتی",
      price: 50000000,
    },
    {
      title: "ادمین اینستاگرام",
      price: 1000000,
    },
    {
      title: "سازنده ویدیو",
      price: 2000000,
    },
  ];

  const formatPrice = (price) => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  const Service = ({ title, price }) => {
    return (
      <li className="bg-blue-500 m-2">
        <div>
          <h5>{title}</h5>
          <span>{formatPrice(price)} تومان</span>
        </div>
        <label className="container">
          <input type="checkbox" />
          <svg viewBox="0 0 64 64" height="2em" width="2em">
            <path
              d="M 0 16 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 16 L 32 48 L 64 16 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 16"
              pathLength="575.0541381835938"
              className="path"
            ></path>
          </svg>
        </label>
      </li>
    );
  };

  const ServicesWrapper = () => {
    return (
      <ul className="relative top-40 bg-red-600 w-fit right-[50%] pt-0.5 pb-0.5 translate-x-[50%]">
        {ourServices.map((service, index) => (
          <Service key={index} title={service.title} price={service.price} />
        ))}
      </ul>
    );
  };

  const Toggle = () => {
    return (
      <div className="flex justify-center items-center fixed top-10 right-[50%] translate-x-[50%]">
        <div className="flex items-center rounded-full bg-background-elm2 p-1 w-80">
          <input
            type="radio"
            name="toggle"
            id="services"
            className="hidden"
            checked={selected === "services"}
            onChange={() => setSelected("services")}
          />
          <label
            htmlFor="services"
            className={`flex-1 text-center py-2 rounded-full transition-all duration-300 ${
              selected === "services"
                ? "bg-background-white text-black"
                : "text-white cursor-pointer"
            }`}
          >
            انتخاب سرویس
          </label>
          <input
            type="radio"
            name="toggle"
            id="offer"
            className="hidden"
            checked={selected === "offer"}
            onChange={() => setSelected("offer")}
          />
          <label
            htmlFor="offer"
            className={`flex-1 text-center py-2 rounded-full transition-all duration-300 ${
              selected === "offer"
                ? "bg-background-white text-black"
                : "text-white cursor-pointer"
            }`}
          >
            کد تخفیف
          </label>
        </div>
      </div>
    );
  };

  return (
    <>
      <Toggle />
      {/* services section */}
      {selected === "services" && <ServicesWrapper />}
    </>
  );
};

export default Services;
