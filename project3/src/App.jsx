import "./App.css";
import { useReducer } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import New from "../pages/New";
import Edit from "../pages/Edit";
import Diary from "../pages/Diary";
import NotFound from "../pages/NotFound";

import Button from "./components/Button";
import Header from "./components/Header";

const mockData = [
  {
    id: 1,
    createdDate: new Date().getTime(),
    emotionId: 1,
    content: "1 content",
  },
  {
    id: 2,
    createdDate: new Date().getTime(),
    emotionId: 2,
    content: "2 content",
  },
];

const reducer = (state, action) => {
  return state;
};

function App() {
  const [data, dispatch] = useReducer(reducer, mockData);

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
