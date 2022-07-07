import { useState, useEffect } from 'react'

const SideBar = (props) => {

    const [beer, setBeer] = useState({
        name: '',
        image_url: '',
        tagline: '',
        first_brewed: '',
        description: '',
        boil_volume: {
            value: '',
            unit: ''
        }
    })

    const fetchAPI = () => {
        fetch("https://api.punkapi.com/v2/beers/" + props.id)
            .then(response => response.json())
            .then(data => {
                setBeer(data[0])
            })
    }

    useEffect(() => {
       if (props.id !== null) {
           fetchAPI()
        }  
    }, [props.id])

    return (  
        <div id="Sidebar" className={(props.sidebar ? 'open' : 'close') + ' sidebar'}>
            <button onClick={props.toogleSidebar}>Close</button>
            <div>
                <h2>Name:{beer.name}</h2>
                <div>
                    <img className="beer-img" src={beer.image_url} alt="A beer"></img>
                </div>
                <h3>{beer.tagline}</h3>
            </div>
            <h2>
                Details
            </h2>
            <ul>
                <li>
                    <h3>Year</h3>
                    <p>{beer.first_brewed}</p>
                </li>
                <li>
                    <h3>Description</h3>
                    <p>{beer.description}</p>
                </li>
                <li>
                    <h3>Boil volume</h3>
                    <p>{beer.boil_volume.value}{beer.boil_volume.unit}</p>
                </li>
            </ul>
        </div>
    )
}

export default SideBar
