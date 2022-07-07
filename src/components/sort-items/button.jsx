const SortButton = (props) => {

    return (
        <button className="sort-button" onClick={props.sortType}>
            {props.title}
        </button>
    )
}

export default SortButton
