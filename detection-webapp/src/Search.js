function Search({ title, addItem }) {

    function handleEnter(event) {
        if (event.code === 'Enter') {
            //filterr addItem(event.target.value);
        }
    }

    return (

        <header className="header">
            <h1>{title}</h1>
            <input className="new-todo"
                onKeyDown={handleEnter}
                placeholder="Search file by name"
                autoFocus />
        </header>
    )
}

export default Search;