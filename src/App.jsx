import "./App.css";
import Start from "./components/start/Start";
import axios from "axios";
import { useState, useEffect } from "react";

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // درخواست به API برای دریافت اطلاعات از دیتابیس
    axios.get('http://localhost:5000/api/data') // آدرس API سرویس backend
      .then(response => {
        setData(response.data); // ذخیره داده‌های دریافتی در وضعیت
      })
      .catch(error => {
        console.error('Error fetching data from API', error);
      });
  }, []);
  return <Start />;
};

export default App;
