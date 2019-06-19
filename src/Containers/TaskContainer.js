import React from 'react';
import Task from '../Components/Task';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import {makeStyles} from '@material-ui/core/styles';
import Popover from '@material-ui/core/Popover';
import PopupState, {bindTrigger, bindPopover} from 'material-ui-popup-state';
import NewTaskForm from '../Components/NewTaskForm';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    backgroundColor: "#F6F8FF",
    textAlign: "center"
  },
  headerText: {
    textAlign: "left"
  }
});

function TaskContainer(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  function handleChange(event, newValue) {
    setValue(newValue);
  }
  let tasks = props.tasks.filter(task => task.completed===false)
  let allTasks = tasks.map(task => {
    return <Task isCompleted={props.isCompleted}task={task}/>
  })
  return (<PopupState>
    {popupState => (
        <div>
        <Paper className={classes.root}>
          <Paper>
            <Typography variant="h4" className={classes.headerText} component="h2" gutterBottom="gutterBottom">
              Tasks
            </Typography>
            <Tabs value={value} onChange={handleChange} indicatorColor="primary" textColor="primary" centered="centered">
              <Tab label="All"/>
              <Tab label=" Projects"/>
            </Tabs>
          </Paper>
          <Button color="primary" {...bindTrigger(popupState)}>+ CREATE TASK</Button>
          {allTasks}
        </Paper>
          <Popover
            {...bindPopover(popupState)}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'center',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'center',
            }}
          >
            <NewTaskForm handleSubmit={props.handleSubmit}/>
          </Popover>
        </div>
      )}

  </PopupState>)
}

export default TaskContainer
