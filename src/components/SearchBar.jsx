import { useState } from "react";

function SearchBar({value, setValue, checked, setChecked}) {
    function handleChange(e) {
        setValue(e.target.value);
    }

    return (<div>
        <input type="text" value={value} onChange={handleChange} placeholder="Search..."/>
        <br/>
        <input type="checkbox" id="stocks" onChange={() => {
            setChecked(!checked);
        }}/>
        <label htmlFor="stocks">Only show products in stock</label>
    </div>);
}

export default SearchBar;