import React from "react"

const HeaderClicks = props => {
    return (
        <div>
            <nav className="navbar text-center text-white navbar-dark bg-dark">
                <h4>Click around</h4>
                <h5>{props.message}</h5>
                <h4>Current Score: {props.score} </h4>
            </nav>
        </div>
    )
}


export default HeaderClicks