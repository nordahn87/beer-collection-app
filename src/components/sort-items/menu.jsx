import SortButton from './button'

const SortMenu = (props) => {

    const sortByNameAscending = () => {
        const tmpBeers = props.beers

        tmpBeers.sort((a, b) => {

            // https://www.javascripttutorial.net/array/javascript-sort-an-array-of-objects/
            // Sort an Array of Objects in JavaScript
            const fa = a.name.toLowerCase(),
                fb = b.name.toLowerCase()

            if (fa < fb) {
                return -1; // A is first
            }

            if (fa > fb) {
                return 1; // B is first
            }

            return 0; // A and B are equal
        })

        props.setBeers([...tmpBeers])
    }


    const sortByNameDescending = () => {

        const tmpBeers = props.beers
        tmpBeers.sort((a, b) => {

            // https://www.javascripttutorial.net/array/javascript-sort-an-array-of-objects/
            // Sort an Array of Objects in JavaScript
            const fa = a.name.toLowerCase(),
                fb = b.name.toLowerCase()

            if (fa > fb) {
                return -1;
            }

            if (fa < fb) {
                return 1;
            }

            return 0;
        })

        props.setBeers([...tmpBeers])
    }

    const sortByAlcLow = () => {

        const tmpBeers = props.beers
        tmpBeers.sort((a, b) => {

            // https://www.javascripttutorial.net/array/javascript-sort-an-array-of-objects/
            // Sort an Array of Objects in JavaScript
            return a.abv - b.abv
        })

        props.setBeers([...tmpBeers])
    }

    const sortByAlcHigh = () => {

        const tmpBeers = props.beers
        tmpBeers.sort((a, b) => {

            // https://www.javascripttutorial.net/array/javascript-sort-an-array-of-objects/
            // Sort an Array of Objects in JavaScript
            return b.abv - a.abv
        })

        props.setBeers([...tmpBeers])
    }

    return (
        <section className="mb-6 bg-gray-200 p-6">
            <h2 className="mr-3 text-2xl font-bold mb-4">
                Sort your awesome beer collection
            </h2>
            
            <div className="flex gap-4">
                <SortButton
                    title="Sort by A / Z"
                    sortType={sortByNameAscending} />

                <SortButton
                    title="Sort by Z / A"
                    sortType={sortByNameDescending} />

                <SortButton
                    title="Sort by lowest ABV"
                    sortType={sortByAlcLow} />

                <SortButton
                    title="Sort by highest ABV"
                    sortType={sortByAlcHigh} />
            </div>
        </section>
    )
}

export default SortMenu
