import { Component } from "react";

class CardList extends Component {
    render() {
        console.log('render from CarList')
        const { teams } = this.props;

        return (
            <div className= 'card-List'> 
            {teams.map((team) => {
             const { id, abbreviation, city, full_name } = team;
             return(
                <div className = 'card-container' key={id}>
                  <p>{abbreviation}</p>
                  <img alt= {`nba team ${full_name}`} src={`https://robohash.org/${full_name}?set=set2&size=180x180`} />
                  <h2>{full_name}</h2>
                  <p>{city}</p>
                  </div>
             )   
            })}
            </div>
            
        )
    }
}
export default CardList;