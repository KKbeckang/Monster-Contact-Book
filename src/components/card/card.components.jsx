import { Component } from "react";
import './card.styles.css';


class card extends Component{

    render(){

        

        const{name, email,id} = this.props.monster;
        return (
            <div className= " card-container" key= {id}>
                <img alt = {`monsters ${name}`} src ={`https://robohash.org/${id}?set=set2&size=180x180`} />
                <h2>{name}</h2>
                <p>{email}</p>

            </div>)

    }
}

export default card;