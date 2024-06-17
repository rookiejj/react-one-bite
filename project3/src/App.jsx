import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import New from "../pages/New";
import Edit from "../pages/Edit";
import Diary from "../pages/Diary";
import NotFound from "../pages/NotFound";

import Button from "./components/Button";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header
        title={"Header"}
        leftChild={<Button text={"Left"} />}
        rightChild={<Button text={"Right"}></Button>}
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new" element={<New />} />
        <Route path="/diary/:id" element={<Diary />} />
        <Route path="/edit/:id" element={<Edit />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
