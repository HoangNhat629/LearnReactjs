import Trafic from "./Components/Trafic/Trafic";
import TodoList from "./Components/ToDoApp/components/TodoList";
import Header from "./Components/ToDoApp/components/Header";
import Footer from "./Components/ToDoApp/components/Footer";
import PropsChildren from "./Components/props_children/PropsChildren";
import "./Components/ToDoApp/css/Todo.css";
import React, { Component } from "react";
import Lifecycles from "./Components/Component_Lifecycles/Lifecycles";
import ReactRouter from "./Components/Router/ReactRouter";
const filterByStatus = (listTodos = [], status = "", id) => {
  switch (status) {
    case "ACTIVE":
      return listTodos.filter((item) => !item.isCompleted);
    case "COMPLETED":
      return listTodos.filter((item) => item.isCompleted);
    case "REMOVE":
      return listTodos.filter((item) => item.id !== id);
    default:
      return listTodos;
  }
};

const filterTodosLeft = (listTodos = []) => {
  return listTodos.filter((item) => !item.isCompleted);
};

class App extends Component {
  /*state: trạng thái bên trong của 1 component*/
  state = {
    listTodos: [
      {
        id: 1,
        text: "ĐI CHỢ",
        isCompleted: true,
      },
      {
        id: 2,
        text: "ĐI HỌC",
        isCompleted: false,
      },
    ],
    isCheckedAll: false,
    status: "ALL",
    todoEditingId: "",
  };

  addTodos = (todo = {}) => {
    this.setState((preState) => ({
      listTodos: [...preState.listTodos, todo],
    }));
  };

  Checked = (id = "") => {
    const { listTodos } = this.state;
    let isCheckedAll = true;
    const updatedListTodos = listTodos.map((item) => {
      if (
        (!item.isCompleted && item.id !== id) ||
        (item.isCompleted && item.id === id)
      ) {
        isCheckedAll = false;
      }
      if (item.id === id) {
        return { ...item, isCompleted: !item.isCompleted };
      }
      return item;
    });
    this.setState({
      isCheckedAll,
      listTodos: updatedListTodos,
    });
  };

  checkAll = () => {
    const { listTodos, isCheckedAll } = this.state;
    const updatedListTodos = listTodos.map((item) => ({
      ...item,
      isCompleted: !isCheckedAll,
    }));
    this.setState((preState) => ({
      isCheckedAll: !preState.isCheckedAll,
      listTodos: updatedListTodos,
    }));
  };

  clearCompleted = () => {
    this.setState((preState) => ({
      listTodos: filterTodosLeft(preState.listTodos),
    }));
  };

  getEditTodo = (id = "") => {
    this.setState({
      todoEditingId: id,
    });
  };

  editTodo = (todo, index) => {
    const { listTodos } = this.state;
    listTodos.splice(index, 1, todo);
    this.setState({ listTodos });
  };

  removeTodo = (id = "") => {
    this.setState((prevState) => ({
      listTodos: filterByStatus(prevState.listTodos, "REMOVE", id),
    }));
  };

  render() {
    const { listTodos, isCheckedAll, status, todoEditingId } = this.state;
    return (
      <div className="todoapp">
        <Header addTodo={this.addTodos} />
        <TodoList
          listTodos={filterByStatus(listTodos, status)}
          Checked={this.Checked}
          checkAll={this.checkAll}
          isCheckedAll={isCheckedAll}
          todoEditingId={todoEditingId}
          getEditTodo={this.getEditTodo}
          editTodo={this.editTodo}
          removeTodo={this.removeTodo}
        />
        <Footer
          activeButton={status}
          setStatusFilter={(status) => this.setState({ status })}
          clearCompleted={this.clearCompleted}
          numOfTodosLeft={filterTodosLeft(listTodos).length}
          numOfTodos={listTodos.length}
        />
        <Trafic />
        <PropsChildren heading="Node">Something here</PropsChildren>
        <br></br>
        <Lifecycles />
        <ReactRouter />
      </div>
    );
  }
}

export default App;
