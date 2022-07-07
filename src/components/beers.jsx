import { useState, useEffect } from 'react'
import Beer from './beers/beer'
import AddBeer from './add-beer'
import Sidebar from './sidebar'

const Beers = () => {

    const [beers, setBeers] = useState([])
    const [sidebar, setSidebar] = useState(false)
    const [beerID, setBeerID] = useState(null)

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

    const toogleSidebar = () => {
        setSidebar(!sidebar)
    }

    return (

        <main>
            <Sidebar
                id={beerID}
                sidebar={sidebar}
                toogleSidebar={toogleSidebar} />


            <div className="beer-wrapper">
                <AddBeer
                    id={beerID}
                    beers={beers}
                    setBeers={setBeers} />

                {
                    beers.map((item) => {
                        return (
                            <Beer
                                key={item.id}
                                id={item.id}
                                name={item.name}
                                imgUrl={item.image_url}
                                tagline={item.tagline}
                                date={item.first_brewed}
                                description={item.description}
                                toogleSidebar={toogleSidebar}
                                setBeerID={setBeerID}
                            />
                        )
                    })
                }
            </div>
        </main>
    )
}

export default Beers
