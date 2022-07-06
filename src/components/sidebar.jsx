const SideBar = (props) => {
    return (  
        <div id="Sidebar" className={(props.sidebar ? 'open' : 'close') + ' sidebar'}>
            <button onClick={props.toogleSidebar}>Close</button>
            <div>
                <h2>{props.name}</h2>
                <div>
                    <img className="beer-img" src={props.imgUrl}></img>
                </div>
                <h3>{props.tagline}</h3>
            </div>
            <h2>
                Details
            </h2>
            <ul>
                <li>
                    <h3>Year</h3>
                    <p>{props.date}</p>
                </li>
                <li>
                    <h3>Description</h3>
                    <p>{props.description}</p>
                </li>
            </ul>
        </div>
    )
}

export default SideBar