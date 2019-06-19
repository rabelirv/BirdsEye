import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Checkbox from '@material-ui/core/Checkbox';
import {makeStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles({
  checkBox: {
    display: "inline-grid",
    float: "left"
  },
  timeContainer:{
    gridColumnEnd:3
  },
  root:{
    backgroundColor:"#F8F9FA"
  },
  textTask:{
    textDecoration:"line-through"
  }
});

function Task(props){
  const classes = useStyles()
    return(
      <Paper className={props.task.completed? (classes.root) : ('')}>
      <Grid container >
        <div className={classes.checkBox}>
          <Checkbox onChange={(e)=>props.isCompleted(props.task, e.target.checked )}inputProps={{'aria-label': 'primary checkbox',}}/>
        </div>
        <Typography component="div">
        <Grid item textAlign="left" m={1}>
          <Typography component="caption" align="left" color="textSecondary" display="inline">{props.task.projectName}</Typography>
          <Typography className={props.task.completed? (classes.textTask) : ('')} component="p">{props.task.taskName}</Typography>
        </Grid>
        <Grid item lassName={classes.timeContainer}>
        <Typography variant="subtitle1"  color="textSecondary">{props.task.day}</Typography>
        <Typography variant="subtitle1" component="caption"  color="textSecondary">{props.task.time}</Typography>
        </Grid>
        </Typography>
        </Grid>
      </Paper>
    )
}

export default Task
