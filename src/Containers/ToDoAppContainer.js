import React from 'react';
import TaskContainer from './TaskContainer';
import ScheduleContainer from './ScheduleContainer';
import Grid from '@material-ui/core/Grid';
import {tasks} from '../store';

let styles = {
  container:{
    backgroundColor:"#F0F0F0"
  }
}
class ToDoAppContainer extends React.Component {
  state ={
    tasks:[],
    filteredTasks:[]
  }
  isCompleted = (task, value)=>{
     this.state.tasks.forEach(e=>{
       return e===task ? (e.completed = value) :(null)
    })
  this.setState({
    tasks:this.state.tasks
  })
  }

  handleChange = (e) => {
  let term = e.target.value
  let filterTasks = this.state.filteredTasks.filter(task => {
    return task.taskName.toLowerCase().match(term)
  })
  this.setState({tasks: filterTasks})
}

  handleSubmit = (task)=>{
    let addedTaskList = [...this.state.tasks, task]
    this.setState({
      tasks:addedTaskList
    })
  }
  componentDidMount(){
    this.setState({
      tasks:tasks,
      filteredTasks:tasks
    })
  }
  render(){
    return(
      <div className="container"style={styles.container}>
        <Grid container spacing={1}>
          <Grid item xl>
            <TaskContainer handleSubmit={this.handleSubmit}isCompleted={this.isCompleted}tasks={this.state.tasks}/>
          </Grid>
          <Grid item sm>
            <ScheduleContainer handleSubmit={this.handleSubmit}isCompleted={this.isCompleted}tasks={this.state.tasks} handleChange={this.handleChange}/>
          </Grid>
        </Grid>
      </div>

    )
  }
}

export default ToDoAppContainer
