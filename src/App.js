import { Component } from 'react';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      teams: [],
      monsters: [],
      searchField: ''
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
      return(
        <div className= 'App'>
        {this.state.teams.map((team) =>{
        return (
          <h2>{team.full_name}</h2>
        )
      })}
        </div>
      )
      
      
    }

}

export default App;
