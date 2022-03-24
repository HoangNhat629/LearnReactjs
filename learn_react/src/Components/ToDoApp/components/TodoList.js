import React, { memo } from "react";
import Todo from "./Todo";
import PropTypes from "prop-types";
const TodoList = memo((props) => {
  /* props: truyền data từ component ngoài vào component con của nó( truyền từ App vào todoList)    */
  const { listTodos, checkAll, isCheckedAll } = props;
  return (
    <section className="main">
      <input
        className="toggle-all"
        type="checkbox"
        onChange={() => {
          console.log("mmark done");
          checkAll();
        }}
        checked={isCheckedAll}
      />
      <label htmlFor="toggle-all" onClick={checkAll}></label>
      <ul className="todo-list">
        {listTodos.map((todo, index) => (
          <Todo index={index} key={todo.id} todo={todo} {...props} />
        ))}
      </ul>
    </section>
  );
});
TodoList.propTypes = {
  listTodos: PropTypes.shape({
    id: PropTypes.number,
    text: PropTypes.string,
    isCompleted: PropTypes.bool,
  }),
  checkAll: PropTypes.func,
  isCheckedAll: PropTypes.bool,
};
export default TodoList;
