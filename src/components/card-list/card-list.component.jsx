import { Component } from "react";
import './card-list.component.styles.css'
class CardList extends Component {
    render() {
        const { teams } = this.props;

        return (
            <div className= 'card-list'> 
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