const Beer = (props) => {

    const beerClickHandler = () => {
        props.setBeerID(props.id)
        props.toogleSidebar()
    }

    return (
        <div className="flex flex-col justify-center items-center bg-white p-6 rounded-3xl card-shadow">
            <div>
                <h2 className="text-2xl font-bold">{props.name}</h2>
                <h3 className="mb-3">{props.tagline}</h3>
                <div className="flex flex-col justify-center items-center">
                    <img className="beer-img" src={props.imgUrl} alt="A Beer"></img>
                    <p className="my-4">Alc {props.abv}% VOL</p>
                </div>
            </div>
            <button
                className="bg-blue-300 w-[200px] p-4 rounded-3xl hover:bg-blue-400 transition-all"
                onClick={beerClickHandler}>
                See more
            </button>
        </div>
    )
}

export default Beer
