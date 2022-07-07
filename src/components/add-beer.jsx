import { useState } from "react"


const AddBeer = (props) => {

    const [beerNameValue, setBeerNameValue] = useState('')
    const [beerTaglineValue, setBeerTaglineValue] = useState('')
    const [beerYearValue, setBeerYearValue] = useState('')
    const [beerDescriptionValue, setBeerDescriptionValue] = useState('')

    const addValues = () => {

        let tmpBeers = props.beers

        const objAddBeer = {
            id: tmpBeers.length + 1,
            name: beerNameValue,
            tagline: beerTaglineValue,
            image_url: "",
            first_brewed: beerYearValue,
            description: beerDescriptionValue
        }
        
        props.setBeers([...tmpBeers, objAddBeer])
    }


    return (
        <div className="beer-card">

            <h2>Add beer to collection</h2>

            <h3>Beer name</h3>
            <input type="text" value={beerNameValue}
                onChange={(e) => { setBeerNameValue(e.target.value) }} />

            <h3>Tagline</h3>
            <input type="text" value={beerTaglineValue}
                onChange={(e) => { setBeerTaglineValue(e.target.value) }} />

            <h2>Details</h2>

            <h3>Year</h3>
            <input type="text" value={beerYearValue}
                onChange={(e) => { setBeerYearValue(e.target.value) }} />

            <h3>Description</h3>
            <input type="text" value={beerDescriptionValue}
                onChange={(e) => { setBeerDescriptionValue(e.target.value) }} />

            <button onClick={addValues}>Tilføj</button>
        </div>
    )
}

export default AddBeer
