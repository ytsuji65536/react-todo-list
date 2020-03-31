import React, { useCallback, useState } from 'react';
import { Button, TextField, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import createStyles from '@material-ui/core/styles/createStyles';

function App() {
  const [ tasks, setTasks ] = useState([]);
  const [ form, setForm ] = useState('');
  console.log(form);

  console.log(tasks);
  console.log(typeof(tasks));

  const onAddClicked = () => {
    console.log(tasks);
    console.log(typeof(tasks));
    setTasks([...tasks, form]);
    setForm('');
  }
  const onDeleteClicked = (taskIndex) => {
    setTasks(tasks.filter((task, index) => index !== taskIndex));
  };

  const onFormChange = useCallback((ev) => {
    setForm(ev.target.value);
  }, [form]);

  return (
    <div>
      {tasks && tasks.map((task, index) => (
        <div>
          <Typography>{task}</Typography>
          <Button onClick={() => onDeleteClicked(index)}>削除</Button>
        </div>
      ))}
      <div>
        <TextField
          margin="normal"
          variant={'outlined'}
          value={form}
          onChange={onFormChange}
        />
        <Button onClick={onAddClicked}>追加</Button>
      </div>
    </div>
  );
}

export default App;
