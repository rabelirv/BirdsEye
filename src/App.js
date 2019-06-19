import React from 'react';
import SignIn from './Components/SignIn';
import ToDoAppContainer from './Containers/ToDoAppContainer';

class App extends React.Component {
  state = {
    user: {},
    valid: false
  }
  getUser = (e, user) => {
    e.preventDefault()
    this.validateUser(user)
  }

  validateUser = (user)=>{
    if (user.email.includes("@") && user.email.length > 6 && user.password.length >= 6) {
      this.setState({
        user: user,
        valid:true
      })
    }else if (!user.email.includes("@") && user.email.length) {
      window.alert("Invalid Email Address")
    }else if (user.password.length < 6) {
      window.alert("Invalid Password")
    }
  }
  render() {
    return (
      <div>      
        {this.state.valid ? (<ToDoAppContainer/>):(<SignIn getUser={this.getUser}/>)}
      </div>
    )
  }
}

export default App
