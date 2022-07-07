const Beer = (props) => {

    const beerClickHandler = () => {
        props.setBeerID(props.id)
        props.toogleSidebar()
    }

    return (
        <div className="beer-card">
            <div>
                <h2>{props.name}</h2>
                <div className="beer-card-container">
                    <img className="beer-img" src={props.imgUrl} alt="A Beer"></img>
                </div>
                <h3>{props.tagline}</h3>
            </div>
            <button
                onClick={beerClickHandler}>
                See more
            </button>
        </div>
    )
}

export default Beer
