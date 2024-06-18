import FormComponent from "../form/form";
import Notifcation from "../notifcation/Notifcation";

const Start = () => {
  return (
    <>
      <Notifcation content={`متن نوتیفکیشن`} icon={`xmark`} iconColor={`red`}/>
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
          <FormComponent />
        </main>
      </div>
    </>
  );
};

export default Start;