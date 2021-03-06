import {useState} from "react"
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";

const products = [
    {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
    {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
    {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
    {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
    {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
    {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
  ];

function FilterableProductTable() {
    const [value, setValue] = useState("");
    const [checked, setChecked] = useState(false);

    return (<div>
        <SearchBar 
            value={value} 
            setValue={setValue}
            checked={checked}
            setChecked={setChecked}/>
        <ProductTable 
            products={products}
            filterText={value}
            inStocked={checked}
        />
    </div>);
}

export default FilterableProductTable;