import { useState } from 'react'

const AddBeer = (props) => {

    const [beerNameValue, setBeerNameValue] = useState('')
    const [beerTaglineValue, setBeerTaglineValue] = useState('')
    const [beerABVValue, setBeerABVValue] = useState('')

    const [beerNamErr, setBeerNameErr,] = useState('')
    const [beerTaglineErr, setBeerTaglineErr,] = useState('')
    const [beerABVErr, setBeerABVErr,] = useState('')

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

        if (beerABVValue === '') {
            setBeerABVErr("ABV is missing")
            isValid = false
        } else {
            setBeerABVErr('')
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
            abv: beerABVValue
        }

        props.setBeers([...tmpBeers, objAddBeer])
        handleReset()
    }

    // Reset input in Add beer
    const handleReset = () => {
        setBeerNameValue('')
        setBeerTaglineValue('')
        setBeerABVValue('')
    }

    return (
        <div className="flex flex-col justify-center items-center bg-green-100 p-6 rounded-3xl card-shadow">
            <h2 className="text-3xl font-bold">Add a beer</h2>
            
            <h3 className="font-bold">Beer name</h3>
            <input
                type="text"
                value={beerNameValue}
                onChange={(e) => { setBeerNameValue(e.target.value) }} />
            <p>{beerNamErr}</p>

            <h3 className="font-bold">Tagline</h3>
            <input
                type="text"
                value={beerTaglineValue}
                onChange={(e) => { setBeerTaglineValue(e.target.value) }} />
            <p>{beerTaglineErr}</p>

            <h3 className="font-bold">ABV (Alcohol by volume)</h3>
            <input
                type="text"
                placeholder="E.g. 4,5 or 45"
                value={beerABVValue}
                onChange={(e) => { setBeerABVValue(e.target.value) }} />
            <p>{beerABVErr}</p>

            <button
                className="bg-green-300 w-[200px] p-4 rounded-3xl hover:bg-green-400 transition-all"
                onClick={addValues}>
                Add beer &#43;
            </button>
        </div>
    )
}

export default AddBeer
