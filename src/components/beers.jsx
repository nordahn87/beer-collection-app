import { useState, useEffect } from 'react'
import Beer from './beers/Beer'
import AddBeer from './add-beer'

const Beers = () => {

    const [beers, setBeers] = useState([])

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

    return (
        <main>
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
