import React, { useState } from 'react';

const AddTask = ({ addTask }) => {
  const [text, setText] = useState('');
  const [day, setDay] = useState('');

  const handleTextChange = (e) => setText(e.target.value);
  const handleDayChange = (e) => setDay(e.target.value);

  const onSubmit = (e) => {
    e.preventDefault();
    addTask({ text, day, isDone: false });

    setText('');
    setDay('');
  };

  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div className="form-control">
        <label htmlFor="task">Task</label>
        <input
          id="task"
          name="text"
          type="text"
          value={text}
          placeholder="AddTask"
          onChange={handleTextChange}
        />
      </div>
      <div className="form-control">
        <label htmlFor="day">Day & Time</label>
        <input
          id="day"
          name="day"
          type="text"
          value={day}
          placeholder="Add Day & Time"
          onChange={handleDayChange}
        />
      </div>
      <input type="submit" value="Save Task" className="btn btn-block" />
    </form>
  );
};

export default AddTask;
