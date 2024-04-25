import "./TodoItem.css";

const TodoItem = ({ id, content, isDone, createdDate }) => {
  return (
    <div className="TodoItem">
      <div className="checkbox">
        <input checked={isDone} type="checkbox"></input>
      </div>
      <div className="title_col">{content}</div>
      <div className="date_col">
        {new Date(createdDate).toLocaleDateString()}
      </div>
      <div className="btn_col">
        <button>삭제</button>
      </div>
    </div>
  );
};
export default TodoItem;
