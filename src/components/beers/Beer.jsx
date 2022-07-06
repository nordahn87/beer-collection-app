const Beer = (props) => {

    return (
        <div className="beer-card">
            <div>
                <h2>{props.name}</h2>
                <img className="beer-img" src={props.imgUrl}></img>
                <h3>{props.tagline}</h3>
            </div>

            <div className="beer-card-details">
                <h2>
                    Details
                </h2>
                <ul>
                    <li>
                        <h3>Year</h3>
                        {props.date}
                    </li>
                    <li>
                        <h3>Description</h3>
                        {props.description}
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Beer
