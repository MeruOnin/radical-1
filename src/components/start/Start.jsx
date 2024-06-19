import NormalBtn from "../butttons/Normal/NormalBtn";
import AnimatedBtn from "../butttons/animated/AnimatedBtn";
import FormComponent from "../form/form";
import Notifcation from "../notifcation/Notifcation";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import "./../butttons/Normal/NormalBtn.css";


const Start = () => {
  const navigate = useNavigate(); // استفاده از useNavigate برای هدایت

  const componentInputs = [
    {
      title: "کد ورودی",
      name: "entercode",
      type: "number",
      validationSchema: Yup.string()
        .matches(/^\d{5}$/, "لطفا کد پنج رقمی وارد کنید")
        .required("این فیلد اجباری است"),
      initialValue: "",
    },
  ];

  const handleSubmit = (values) => {
    const { entercode } = values;
    if (entercode.length !== 5) {
      navigate("/register");
    } else {
      <Notifcation content={`لطفا کد را به درستی وارد کنید`} icon={`xmark`} />;
    }
  };

  return (
    <>
      <div className="rounded-3xl p-4 max-w-60 w-fit flex flex-col justify-center items-center absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <header>
          <img
            src="src/assets/radical-logo-white.png"
            className="w-32 h-32"
            alt="radical logo"
          />
        </header>
        <main className="text-center">
          <h1 className="text-h1 font-iranSans text-background-elm">رادیکال</h1>
          <p className="text-background-white">
            رادیکال ، سامانه ای برای انجام خدمات تکنولوژی
          </p>
          <FormComponent
            inputs={componentInputs}
            btn={<NormalBtn title={`ورود به رادیکال`} />}
            onSubmit={handleSubmit} // اضافه کردن این خط
          />
        </main>
      </div>
    </>
  );
};

export default Start;
