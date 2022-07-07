const SortButton = (props) => {

    return (
        <button
            className="bg-white w-[200px] p-4 rounded-3xl hover:bg-gray-300 transition-all"
            onClick={props.sortType}>
            {props.title}
        </button>
    )
}

export default SortButton
