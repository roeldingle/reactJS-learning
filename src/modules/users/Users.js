import React, { Component } from 'react';
import User from './User';

class Users extends Component{

  state = {
    title: 'Team ASSET',
    users: [
      {name: 'Koo', job_lvl : 3},
      {name: 'Coleens', job_lvl : 2},
      {name: 'Emman', job_lvl : 1},
      {name: 'Roy', job_lvl : 4},
      {name: 'Mat', job_lvl : 1},
      {name: 'Fritz', job_lvl : 4},
    ]
  }

  promoteTeam = () => {
    
    const newUsers = this.state.users.map((users) => {
      let tempUser = users;
      /*prevent from limit */
      let limit = 7;
      if(tempUser.job_lvl < limit){
        tempUser.job_lvl += 1;
      }
      return tempUser;
    });

    this.setState({newUsers});
  }

  render(){
    return(
      <div>
        <h1>{this.state.title} <button onClick={this.promoteTeam}>Promote Everyone</button></h1>

        <ol>
          {
            this.state.users.map((users) => {
                return <li><User jlvl={users.job_lvl}>{users.name}</User></li>
            })
          }
        </ol>
      </div>
    )
  }
}

export default Users;
