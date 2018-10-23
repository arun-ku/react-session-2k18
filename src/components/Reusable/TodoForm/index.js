import React, { Component } from 'react';

class TodoForm extends Component {
  constructor(props) {
    super();
    this.state = {
      taskName: '',
      taskDesc: '',
      isTaskDone: false,
      isEditMode: false,
    };
  }

  handleInputChange = (key) => (e) => {
    this.setState({ [key]: e.target.value });
  };

  handleCheckboxClick = () => {
    const { isTaskDone } = this.state;
    this.setState({ isTaskDone: !isTaskDone });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { isTaskDone, taskDesc, taskName, isEditMode, id } = this.state;
    const { handleTodoFormSubmit, handleTodoEdit } = this.props;
    if (!isEditMode) {
      handleTodoFormSubmit({
        id: Math.floor(Math.random() * 100000000),
        isTaskDone,
        taskDesc,
        taskName,
      });
    } else {
      handleTodoEdit({
        id,
        isTaskDone,
        taskDesc,
        taskName,
      });
    }
    this.setState({
      isTaskDone: false,
      taskDesc: '',
      taskName: '',
      id : ''
    })
  };

  componentWillReceiveProps(nextProps) {
    const { taskToEdit } = nextProps;
    const { taskToEdit: lastTaskToEdit } = this.props;
    if (taskToEdit && taskToEdit.id !== (lastTaskToEdit && lastTaskToEdit.id)) {
      this.setState({...taskToEdit, isEditMode: true});
    }
  }

  render() {
    const { isTaskDone, taskDesc, taskName } = this.state;
    return (
      <div style={{ flex: 1 }}>
        <form onSubmit={this.handleSubmit}>
          <div>
            <input onChange={this.handleInputChange('taskName')} value={taskName} type="text" placeholder="Task" />
          </div>
          <div>
            <input onChange={this.handleInputChange('taskDesc')} value={taskDesc} type="text" placeholder="Description" />
          </div>
          <div>
            <b>Status: </b>
            <input onClick={this.handleCheckboxClick} type="checkbox" checked={isTaskDone} />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default TodoForm;