import "./App.css";
import { useState, useRef } from "react";
import Header from "./components/Header";
import Editor from "./components/Editor";
import List from "./components/List";

const mockDate = [
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

function App() {
  const [todos, setTodos] = useState(mockDate);
  const idRef = useRef(3);

  const onCreate = (content) => {
    const newTodo = {
      id: idRef.current++,
      isDone: false,
      content: content,
      date: new Date().getTime(),
    };

    setTodos([newTodo, ...todos]);
  };
  const onUpdate = (targetId) => {
    setTodos(
      todos.map((todo) =>
        // 매개변수가 많은 객체를 전달할 때, 왜 { todo } 가 아닌, 스프레드 연산자를 사용한 { ...todo } 를 전달해야 하는지... 왜더라...

        todo.id === targetId ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };
  const onDelete = (targetId) => {
    setTodos(todos.filter((todo) => todo.id !== targetId));
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
