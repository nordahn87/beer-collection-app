import { useState } from 'react'

const AddBeer = (props) => {

    const [beerNameValue, setBeerNameValue] = useState('')
    const [beerTaglineValue, setBeerTaglineValue] = useState('')
    const [beerDescriptionValue, setBeerDescriptionValue] = useState('')

    const [beerNamErr, setBeerNameErr,] = useState('')
    const [beerTaglineErr, setBeerTaglineErr,] = useState('')
    const [beerDescriptionErr, setBeerDescriptionErr,] = useState('')

    // Validate inputs
    const handleValidation = () => {
        let isValid = true

        if (beerNameValue === '') {
            setBeerNameErr("Beer name is missing")
            isValid = false
        } else {
            setBeerNameErr('')
        }

        if (beerTaglineValue === '') {
            setBeerTaglineErr("Tagline is missing")
            isValid = false
        } else {
            setBeerTaglineErr('')
        }

        if (beerDescriptionValue === '') {
            setBeerDescriptionErr("Description is missing")
            isValid = false
        } else {
            setBeerDescriptionErr('')
        }
        return isValid
    }

    // Adds object to beer array
    const addValues = () => {
        if (handleValidation() === false) {
            return false
        }

        const tmpBeers = props.beers

        const objAddBeer = {
            id: tmpBeers.length + 1,
            name: beerNameValue,
            tagline: beerTaglineValue,
            image_url: "./default.png",
            description: beerDescriptionValue
        }

        props.setBeers([...tmpBeers, objAddBeer])
        handleReset()
    }

    // Reset input in Add beer
    const handleReset = () => {
        setBeerNameValue('')
        setBeerTaglineValue('')
        setBeerDescriptionValue('')
    }

    return (
        <div className="beer-card">

            <h2>Add beer to collection</h2>

            <h3>Beer name</h3>
            <input type="text" value={beerNameValue}
                onChange={(e) => { setBeerNameValue(e.target.value) }} />
            <p>{beerNamErr}</p>

            <h3>Tagline</h3>
            <input type="text" value={beerTaglineValue}
                onChange={(e) => { setBeerTaglineValue(e.target.value) }} />
            <p>{beerTaglineErr}</p>

            <h2>Details</h2>

            <h3>Description</h3>
            <input type="text" value={beerDescriptionValue}
                onChange={(e) => { setBeerDescriptionValue(e.target.value) }} />
            <p>{beerDescriptionErr}</p>

            <button onClick={addValues}>Add beer</button>

        </div>
    )
}

export default AddBeer
