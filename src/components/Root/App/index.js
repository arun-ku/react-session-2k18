import React, { Component } from 'react';
import TodoForm from '../../Reusable/TodoForm';
import TodoList from '../../Reusable/TodoList';

class App extends Component {
  constructor() {
    super();
    this.state = {
      todos: [],
      taskToEdit: null,
    };
  }

  handleFormSubmit = (values) => {
    const { todos } = this.state;
    const { isTaskDone, taskDesc, taskName, id } = values;
    this.setState({ todos: [...todos, { id, isTaskDone, taskDesc, taskName }] });
  };

  handleEdit = (task) => {
    this.setState({ taskToEdit: task });
  };

  handleTodoEdit = (task) => {
    const { todos } = this.state;
    let newTodos = [...todos];
    newTodos = todos.map(todo => {
      if (todo.id === task.id) {
        return {
          ...todo,
          ...task,
        }
      }

      return todo;
    });

    this.setState({ todos: newTodos, taskToEdit: null });
  };

  render() {
    return (
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <TodoForm
          taskToEdit={this.state.taskToEdit}
          handleTodoFormSubmit={this.handleFormSubmit}
          handleTodoEdit={this.handleTodoEdit}
        />
        <TodoList handleEditClick={this.handleEdit} tasks={this.state.todos} />
      </div>
    );
  }
}

export default App;