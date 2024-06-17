import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import New from "../pages/New";
import Diary from "../pages/Diary";
import NotFound from "../pages/NotFound";
import Button from "./components/Button";

function App() {
  return (
    <>
      <Button />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new" element={<New />} />
        <Route path="/diary" element={<Diary />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
