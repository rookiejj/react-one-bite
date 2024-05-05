import { useState } from "react";
import TodoItem from "./TodoItem";
import "./TodoList.css";

const TodoList = ({ todo, onUpdate }) => {
  const [search, setSearch] = useState("");
  const onChangeSearch = (e) => {
    setSearch(e.target.value);
  };
  const getSearchResult = () => {
    return search === ""
      ? todo
      : todo.filter((it) =>
          it.content.toLowerCase().includes(search.toLowerCase())
        );
  };
  return (
    <div className="TodoList">
      <h4>Todo List 🌱</h4>
      <input
        value={search}
        onChange={onChangeSearch}
        className="searchbar"
        placeholder="검색어를 입력하세요"
      ></input>
      <div className="list_wrapper">
        {getSearchResult().map(function it(it) {
          return <TodoItem key={it.id} {...it} onUpdate={onUpdate} />;
        })}
        {/* {getSearchResult().map((it) => (
          <TodoItem key={it.id} {...it} />
        ))} */}
      </div>
    </div>
  );
};
export default TodoList;
