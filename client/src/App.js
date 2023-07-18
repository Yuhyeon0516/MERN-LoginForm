import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import { useState } from "react";
import Header from "./layouts/Header";
import Footer from "./layouts/Footer";
import Write from "./pages/Write";

function App() {
  const [isLogined, setIsLogined] = useState(false);

  const isLoginedTrue = () => {
    setIsLogined(true);
  };

  const isLoginedFalse = () => {
    setIsLogined(false);
  };

  return (
    <>
      <Header isLogined={isLogined} isLoginedTrue={isLoginedTrue} isLoginedFalse={isLoginedFalse} />
      <Routes>
        <Route path="/" element={<Home isLogined={isLogined} />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/write" element={<Write />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
