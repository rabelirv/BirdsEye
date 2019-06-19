import React from 'react';
import Typography from '@material-ui/core/Typography';
import Task from './Task';

class Completed extends React.Component {
  render(){
    let tasks = this.props.tasks.filter(task => task.completed === true)

    let completedTasks = tasks.map(task => {
      return <Task task={task} isCompleted={this.props.isCompleted}/>
    })
    return(
      <div>
        <Typography>--------Completed--------</Typography>
        {completedTasks}
      </div>
    )
  }
}

export default Completed
