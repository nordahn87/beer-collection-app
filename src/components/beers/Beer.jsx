import { useState } from "react"

const Beer = (props) => {

    const hund = () => {
        props.setBeerID(props.id)
        props.toogleSidebar()
    }

    return (
        <div className="beer-card">
            <div>
                <h2>{props.name}</h2>
                <div className="beer-card-container">
                    <img className="beer-img" src={props.imgUrl}></img>
                </div>
                <h3>{props.tagline}</h3>
            </div>
            <button
                onClick={hund}>
                See more
            </button>
        </div>
    )
}

export default Beer
