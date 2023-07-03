import { Component } from 'react';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      teams: [],
      monsters: [],
    };
  }

  async componentDidMount(){
    try{
      const response = await fetch('https://www.balldontlie.io/api/v1/teams');
      const teamName = await response.json();
      this.setState({teams: teamName.data}) 
    }
    catch (err){
      console.log(err)
    }
    };
  
  
  render() {
    return (
      <div className='App'>
        {this.state.teams.map((team) => {
          return(
            <div key={team.id}>
            <p>{team.city}</p>
              <h1>{team.full_name}</h1>
              <p>{team.name}</p>
              <p>{team.city}</p>
            </div>
          )
        })}
      </div>
    );
  }
}

export default App;
