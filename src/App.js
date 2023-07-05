import { Component } from 'react';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      teams: [],
      searchString: '',
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

    getInput = (e) => {
      const searchString = e.target.value.toLocaleLowerCase(); 
     //receives a callback and passes it to each element, if the element is true according to the callback it will keep the element. if false
     //it will not be included.
      this.setState(() =>{
        return { searchString };
      });
    };

    render() {
      const nameFilter = this.state.teams.filter((team)=> {
        return team.full_name.toLocaleLowerCase().includes(this.state.searchString);
      });

      return(
        <div className= 'App'>
        <input type='search'
         placeholder='enter team' 
         onChange={this.getInput} />

        {nameFilter.map((team) =>{
        return (
          <div key={team.id}>
          <p >{team.abbreviation}</p>
          <h2>{team.full_name}</h2>
          <p>{team.city}</p>
          </div>
          
        )
      })}
        </div>
      )
      
      
    }

}

export default App;
