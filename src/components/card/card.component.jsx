import { Component } from 'react';

import './card.component.styles.css';

class Card extends Component {
    render() {
        const {id, abbreviation, city, full_name} = this.props.team;

        return (
            <div className= 'card-container' key={id}>
            <p>{abbreviation}</p>
            <img alt= {`nba team ${full_name}`} 
            src={`https://robohash.org/${full_name}?set=set2&size=180x180`} />
            <h2>{full_name}</h2>
            <p>{city}</p>
            </div>
        )
    }
}

export default Card;