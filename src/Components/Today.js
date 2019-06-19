import React from 'react';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import Popover from '@material-ui/core/Popover';
import PopupState, {bindTrigger, bindPopover} from 'material-ui-popup-state';
import NewTaskForm from '../Components/NewTaskForm';
import Task from '../Components/Task';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    textAlign: "center"
  },
  paper: {
    backgroundColor: "#F6F8FF",
    textAlign: 'justify',
    color: theme.palette.text.secondary
  },
  headerText: {
    textAlign: "left"
  },
  createButton: {
    textAlign: 'center'
  }
}));

function Today(props) {
  let tasks = props.tasks.filter(task => task.day === "Today" && task.completed===false)

  let todayTasks = tasks.map(task => {
    return <Task task={task} isCompleted={props.isCompleted}/>
  })
  const classes = useStyles();
  return (<PopupState>
    {
      popupState => (<div>
        <Paper className={classes.paper}>
          <Paper>
            <Typography component="h5" variant="h5">
              Today
            </Typography>
          </Paper>
          <Button className={classes.createButton} color="primary" {...bindTrigger(popupState)}>+ CREATE TASK</Button>
          {todayTasks}
        </Paper>
        <Popover {...bindPopover(popupState)} anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center'
          }} transformOrigin={{
            vertical: 'top',
            horizontal: 'center'
          }}>
          <NewTaskForm handleSubmit={props.handleSubmit}/>
        </Popover>
      </div>)
    }
  </PopupState>)
}

export default Today
