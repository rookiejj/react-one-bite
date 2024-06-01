import "./App.css";
import { useRef, useReducer } from "react";
import Header from "./components/Header";
import Editor from "./components/Editor";
import List from "./components/List";

const mockData = [
  {
    id: 0,
    isDone: false,
    content: "React 공부하기",
    date: new Date().getTime(),
  },
  {
    id: 1,
    isDone: false,
    content: "빨래하기",
    date: new Date().getTime(),
  },
  {
    id: 2,
    isDone: false,
    content: "노래 연습하기",
    date: new Date().getTime(),
  },
];

function reducer(state, action) {
  switch (action.type) {
    case "CREATE":
      return [action.data, ...state];
    case "UPDATE":
      return state.map((item) =>
        item.id === action.data ? { ...item, isDone: !item.isDone } : item
      );
    case "DELETE":
      return state.filter((item) => item.id !== action.data);
    default:
      return state;
  }
}

function App() {
  // 아래 값들도 리랜더링될때마다 재생성 되나?
  const [todos, dispatch] = useReducer(reducer, mockData);
  const idRef = useRef(3);

  const onCreate = (content) => {
    dispatch({
      type: "CREATE",
      data: {
        id: idRef.current++,
        isDone: false,
        content: content,
        date: new Date().getTime(),
      },
    });
  };
  const onUpdate = (targetId) => {
    dispatch({
      type: "UPDATE",
      data: targetId,
    });
  };
  const onDelete = (targetId) => {
    dispatch({
      type: "DELETE",
      data: targetId,
    });
  };
  return (
    <div className="App">
      <Header />
      <Editor onCreate={onCreate} />
      <List todos={todos} onUpdate={onUpdate} onDelete={onDelete} />
    </div>
  );
}

export default App;
