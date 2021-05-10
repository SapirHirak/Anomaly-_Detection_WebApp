function Search({ searchFilterEvent }) {

    function handleEnter(event) {
        if (event.code === 'Enter') {
            //filterr addItem(event.target.value);
            searchFilterEvent(event.target.value);
        }
    }


    return (

        <header className="header">
            <input className="new-todo"
                onChange={(e) => searchFilterEvent(e.target.value)}
                placeholder="Search model by name"
                autoFocus />
        </header>
    )
}

export default Search;