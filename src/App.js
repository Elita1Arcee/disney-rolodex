import { Component } from 'react';

import './components/card-list/card-list.component.jsx'
import './App.css';
import CardList from './components/card-list/card-list.component.jsx';
import SearchBox from './components/search-box/search-box.component.jsx';

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
        <h1 className='app-title'>NBA Monster Mascots</h1>
        <SearchBox 
          className = 'search-box' 
          placeholder = 'search teams' 
          onChangeHandler = {this.getInput}/>
          <CardList teams = {nameFilter}/>
        </div>
      )
      
      
    }

}

export default App;
