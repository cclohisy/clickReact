import React, { Component } from 'react';
import GameTile from "./GameTile.js"
// import cards from "../cards.json";

// class TileContainer extends Component{

// state = {
//     cards
// }
const TileContainer = props => (
    // render() {
    //     return (
    <div className="container">
        <div className="row">
            {props.cards.map(card =>
                <GameTile
                    handleClick={props.handleClick}
                    image={card.image}
                    id={card.id}
                    name={card.name}
                    clicked = {card.clicked}
                />
            )}
        </div>
    </div>

    //)}
)
//}

export default TileContainer