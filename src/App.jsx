import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Register from "./components/register/Register";
import Start from "./components/start/Start";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Start />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
