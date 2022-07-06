import { useState } from "react"


const AddBeer = (props) => {

    const [beerNameValue, setBeerNameValue] = useState('')
    const [beerTaglineValue, setBeerTaglineValue] = useState('')
    const [beerYearValue, setBeerYearValue] = useState('')
    const [beerDescriptionValue, setBeerDescriptionValue] = useState('')


    return (
        <div className="beer-card">

            <h2>Add beer to collection</h2>

            <h3>Beer name</h3>
            <input type="text" value={beerNameValue}
                onChange={(e) => { setBeerNameValue(e.target.value) }}/>

            <h3>Tagline</h3>
            <input type="text" value={beerTaglineValue}
                onChange={(e) => { setBeerTaglineValue(e.target.value) }} />

            <div className="beer-card-details">

                <h2>Details</h2>

                <h3>Year</h3>
                <input type="text" value={beerYearValue}
                    onChange={(e) => { setBeerYearValue(e.target.value) }} />

                <h3>Description</h3>
                <input type="text" value={beerDescriptionValue}
                    onChange={(e) => { setBeerDescriptionValue(e.target.value) }} />

            </div>
        </div>
    )
}

export default AddBeer
