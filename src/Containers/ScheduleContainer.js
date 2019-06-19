import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Tomorrow from '../Components/Tomorrow';
import Today from '../Components/Today';
import NavBar from '../Components/Navbar';
import Completed from '../Components/Completed';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'justify',
    color: theme.palette.text.secondary,
  },
  createButton: {
    textAlign:'center'
  }
}));


function ScheduleContainer(props){
  const classes = useStyles()
    return(
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <NavBar handleChange={props.handleChange}/>
          </Grid>
          <Grid item sm={8}>
            <Today handleSubmit={props.handleSubmit}isCompleted={props.isCompleted}tasks={props.tasks}/>
              <Completed tasks={props.tasks} isCompleted={props.isCompleted}/>
          </Grid>
          <Grid item sm>
            <Tomorrow classes={classes} handleSubmit={props.handleSubmit}isCompleted={props.isCompleted}tasks={props.tasks}/>
          </Grid>
        </Grid>
      </div>
    )
}

export default ScheduleContainer
