import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Register from "./components/register/Register";
import Start from "./components/start/Start";
import Header from "./components/header/Header";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Start />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
