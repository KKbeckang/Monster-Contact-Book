import { Component } from "react";
import Card from "../card/card.components";
import './card-list.styles.css';
class CardList extends Component {


    render() {
        const {monsters} = this.props;
        
        return (
            // non siblling only one parent compoenent
            <div className="card-list"> {monsters.map(monster => {
                    return (
                        <Card monster = {monster}></Card>
                    );
                    })}
            </div>
        )
    }


}
export default CardList;