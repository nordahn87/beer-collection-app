import { useState, useEffect } from 'react'
import Comments from './comments/comments'

const SideBar = (props) => {

    const [beer, setBeer] = useState({
        name: '',
        image_url: '',
        tagline: '',
        first_brewed: '',
        abv: 0,
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
        <section
            id="Sidebar" className={(props.sidebar ? 'right-0' : 'right-[-100vw] md:right-[-50vw]') + ' fixed bg-white h-full top-0 w-[100vw] md:w-[50vw] transition-all p-12'}>
            <button
                className="bg-gray-300 w-[40px] rounded-full h-[40px] text-xl mb-8"
                onClick={props.toogleSidebar}>
                &#10005;
            </button>
            <section className="mb-6">
                <h2 className="text-5xl font-bold">{beer.name}</h2>
                <h3 className="text-2xl mb-6">{beer.tagline}</h3>
                <img className="beer-img" src={beer.image_url} alt="A beer"></img>
            </section>
            <ul>
                <li className="flex">
                    <h3 className="mr-3 font-bold">ABV:</h3>
                    <p>Alc {beer.abv}% VOL</p>
                </li>
                <li className="flex">
                    <h3 className="mr-3 font-bold">First brewed:</h3>
                    <p>{beer.first_brewed}</p>
                </li>
                <li className="flex">
                    <h3 className="mr-3 font-bold">Boil volume:</h3>
                    <p>{beer.boil_volume.value} {beer.boil_volume.unit}</p>
                </li>
                <li>
                    <hr />
                </li>
                <li>
                    <h3 className="mr-3 mb-4 font-bold text-xl">Description</h3>
                    <p className="bg-gray-100 p-6">{beer.description}</p>
                </li>
            </ul>
            <Comments />
        </section>
    )
}

export default SideBar
