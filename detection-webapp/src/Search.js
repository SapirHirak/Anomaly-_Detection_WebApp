const { Link } = require("@material-ui/core");

function Search() {

    /*function handleEnter(event) {
        if (event.code === 'Enter') {
            addItem(event.target.value);
        }
    }*/

    return (
        <form action="/" method="get">
            <label htmlFor="header-search">
            </label>
            <input
            type="text"
            id="header-search"
            placeholder="Search for model"
            />
            <button type="submit">search</button>
        </form>
    )
}

export default Search;