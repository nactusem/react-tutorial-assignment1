import React from 'react';
import './App.css';
import UserInput from "./UserInput";
import UserOutput from "./UserOutput";

class App extends React.Component {

  state = {
    username: "mesutcan"
  };

  usernameHandler = (event) => {
    this.setState({username:event.target.value})
  };

  render() {
    return (
        <div className="App">
          <UserInput changed={this.usernameHandler}/>
          <UserOutput username={this.state.username}/>
        </div>
    );
  }
}

export default App;
