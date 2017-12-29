import React, { Component } from 'react';
import Users from './modules/users/Users';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Users title="Users List" />
      </div>
    );
  }
}

export default App;
