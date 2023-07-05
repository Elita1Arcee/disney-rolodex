import { Component } from "react";
import Card from '../card/card.component'
import './card-list.component.styles.css'
class CardList extends Component {
    render() {
        const { teams } = this.props;

        return (
            <div className= 'card-list'> 
            {teams.map((team, i) => {
             return <Card key={i} team= {team}/>;   
            })}
            </div>
        )
    }
}
export default CardList;