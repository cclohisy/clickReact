import React from "react"

const GameTile = props => (
    <div className = "col-md-2">
        <img src = {props.image} alt = {props.name}id = {props.id} className = "img-thumbnail">
        </img>
    </div>
)

export default GameTile

