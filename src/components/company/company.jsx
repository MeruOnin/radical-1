import React, { useState } from "react";
import * as Yup from "yup";
import Header from "../header/Header";
import FormComponent from "../form/form";
import NormalBtn from "../butttons/Normal/NormalBtn";

const CompanyInfo = () => {
  const [isChecked, setIsChecked] = useState([]);

  const InfoTemplate = ({ title, inputs }) => {
    return (
      <div className="p-2 relative top-3">
        <header className="text-right text-background-white text-3xl">
          <h2>{title}</h2>
        </header>
        <main>{inputs}</main>
      </div>
    );
  };

  const historyOfCompanyOptions = [
    {
      title: "لوگو",
    },
    {
      title: "شعار",
    },
    {
      title: "رنگ",
    },
    {
      title: "المان های شخصیتی",
    },
    {
      title: "تبلیغات ",
    },
  ];

  const handleCheck = (id) => {
    setIsChecked((prevChecked) =>
      prevChecked.includes(id)
        ? prevChecked.filter((checkedId) => checkedId !== id)
        : [...prevChecked, id]
    );
  };

  const CheckBox = ({ title, id }) => {
    return (
      <li className="relative top-4 m-1">
        <input
          type="checkbox"
          className="hidden"
          checked={isChecked.includes(id)}
          onChange={() => handleCheck(id)}
          name={title}
          id={id}
        />
        <label
          htmlFor={id}
          className={` text-background-white border-1 transition-all duration-200 hover:border-background-elm w-fit p-4 cursor-pointer rounded-xl ${
            isChecked.includes(id)
              ? "border-background-elm bg-background-elm"
              : "bg-background-elm2 border-background-elm2"
          }`}
        >
          {title}
        </label>
      </li>
    );
  };

  const HistoryOfCompany = () => {
    return (
      <InfoTemplate
        title={`سابقه شرکت`}
        inputs={
          <ul className="flex justify-center flex-wrap items-center">
            {historyOfCompanyOptions.map((option, index) => (
              <CheckBox
                title={option.title}
                id={`option-${index + 1}`}
                key={index}
              />
            ))}
          </ul>
        }
      />
    );
  };

  const componentInputs = [
    {
      title: "نام شرکت",
      name: "companyname",
      type: "text",
      validationSchema: Yup.string().required("این فیلد اجباری است"),
      initialValue: "",
    },
    {
      title: "سال تاسیس کسب و کار",
      name: "yearofbi",
      type: "text",
      validationSchema: Yup.string().required("این فیلد اجباری است"),
      initialValue: "",
    },
    {
      title: "سایز شرکت",
      name: "sizeofcompany",
      type: "text",
      validationSchema: Yup.string().required("این فیلد اجباری است"),
      initialValue: "",
    },
    {
      title: "آدرس",
      name: "address",
      type: "text",
      validationSchema: Yup.string().required("این فیلد اجباری است"),
      initialValue: "",
    },
    {
      title: "بازار شروع کار",
      name: "startedwork",
      type: "text",
      validationSchema: Yup.string().required("این فیلد اجباری است"),
      initialValue: "",
    },
    {
      title: "بازار چشم انداز",
      name: "eyework",
      type: "text",
      validationSchema: Yup.string().required("این فیلد اجباری است"),
      initialValue: "",
    },
    {
      title: "وبسایت",
      name: "website",
      type: "text",
      validationSchema: Yup.string().required("این فیلد اجباری است"),
      initialValue: "",
    },
  ];

  const CompanyInformation = () => {
    return (
      <div className="relative top-10">
        <InfoTemplate
          title={`مشخصات شرکت`}
          inputs={
            <ul>
              <FormComponent
                inputs={componentInputs}
                btn={<NormalBtn title={`مرحله بعد`} />}
              />
            </ul>
          }
        />
      </div>
    );
  };

  return (
    <div className="rounded-3xl p-4 max-w-100 w-fit flex flex-col justify-center items-center absolute top-[10%] left-[50%] translate-x-[-50%] translate-y-[-10%]">
      <Header
        title={`رادیکال`}
        desc={`سابقه خود را در فعالیت شرکت های مختلف بنویسید`}
        content={
          <>
            <HistoryOfCompany />
            <CompanyInformation />
          </>
        }
      />
    </div>
  );
};

export default CompanyInfo;
