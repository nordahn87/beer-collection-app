import { useState, useEffect } from 'react'
import Beer from './beers/Beer'
import AddBeer from './add-beer'
import Sidebar from './sidebar'

const Beers = () => {

    const [beers, setBeers] = useState([])
    const [sidebar, setSidebar] = useState(false)
    const [sidebarBeerName, setSidebarBeerName ] = useState("")
    const [currentIndex, setCurrentIndex] = useState(0)

    const fetchAPI = () => {
        fetch("https://api.punkapi.com/v2/beers")
            .then(response => response.json())
            .then(data => {
                setBeers(data)
            })
    }

    useEffect(() => {
        fetchAPI()
    }, [])

    const toogleSidebar = (e) => {
        setSidebar(!sidebar)
        const index = parseInt(e.currentTarget.dataset.index)
        setSidebarBeerName(beers[index].name)
        setCurrentIndex(index)
    }

    useEffect(() => {
        /* Prevents it from trying to find a index, before the API call is done */
        if (beers.length === 0) {
            return
        }
        setSidebarBeerName(beers[currentIndex].name)
    }, []);

    return (
        <main>
            <Sidebar
                name={sidebarBeerName}
                sidebar={sidebar} 
                toogleSidebar={toogleSidebar}/>

            <div className="beer-wrapper">
                {
                    beers.map((item, index) => {
                        return (
                            <Beer
                                key={index}
                                name={item.name}
                                imgUrl={item.image_url}
                                tagline={item.tagline}
                                date={item.first_brewed}
                                description={item.description}
                                onClick={toogleSidebar}
                            />
                        )
                    })
                }
                <AddBeer />
            </div>
        </main>
    )
}

export default Beers
