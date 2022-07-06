import { useState, useEffect } from 'react'
import Beer from './beers/Beer'
import AddBeer from './add-beer'
import Sidebar from './sidebar'

const Beers = () => {

    const [beers, setBeers] = useState([])
    const [sidebar, setSidebar] = useState(false)

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
