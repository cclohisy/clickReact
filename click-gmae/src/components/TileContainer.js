import React, { Component } from 'react';
import GameTile from "./GameTile.js"
import cards from "../cards.json";

class TileContainer extends Component {

    state = {
        cards
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    {this.state.cards.map(card => 
                        <GameTile
                            image={card.image}
                            id={card.id}
                            name={card.name}
                        />
                    )}
                </div>
            </div>

        )
    }
}

export default TileContainer