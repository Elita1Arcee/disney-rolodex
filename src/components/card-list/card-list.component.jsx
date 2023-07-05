import { Component } from "react";

class CardList extends Component {
    render() {
        console.log('render from CarList')
        const { teams } = this.props;

        return (
            <div>
            {teams.map((team) => 
                  <div key={team.id}>
                  <p >{team.abbreviation}</p>
                  <h2>{team.full_name}</h2>
                  <p>{team.city}</p>
                  </div>
                  
                
              )}
            </div>
            
        )
    }
}
export default CardList;