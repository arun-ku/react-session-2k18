import React from 'react';
import PropTypes from 'prop-types';

const TodoList = (props) => {
  const { tasks, handleEditClick } = props;
  return (
    <div style={{ flex: 1 }}>
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', fontWeight: 600 }}>
        <span style={{ padding: 5, flex: 1 }}>S. No.</span>
        <span style={{ padding: 5, flex: 2 }}>Task</span>
        <span style={{ padding: 5, flex: 4 }}>Description</span>
        <span style={{ padding: 5, flex: 2 }}>Status</span>
        <span style={{ padding: 5, flex: 2 }} />
      </div>
      {
        tasks.map((task, i) => {
          return (
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }} key={task.id}>
              <span style={{ padding: 5, flex: 1 }}>{i + 1}</span>
              <span style={{ padding: 5, flex: 2 }}>{task.taskName}</span>
              <span style={{ padding: 5, flex: 4 }}>{task.taskDesc}</span>
              <span style={{ padding: 5, flex: 2 }}>{task.isTaskDone ? 'Done' : 'Todo'}</span>
              <span style={{ padding: 5, flex: 2 }}>
                <button onClick={() => handleEditClick(task)} type="button">
                  Edit
                </button>
              </span>
            </div>
          )
        })
      }
    </div>
  );
};

TodoList.propTypes = {

};

export default TodoList;
