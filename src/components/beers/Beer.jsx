import { useState } from "react"

const Beer = (props) => {

    return (
        <div className="beer-card">
            <div>
                <h2>{props.name}</h2>
                <div className="beer-card-container">
                    <img className="beer-img" src={props.imgUrl}></img>
                </div>
                <h3>{props.tagline}</h3>
            </div>
            <button onClick={props.onClick}>See more</button>
        </div>
    )
}

export default Beer
