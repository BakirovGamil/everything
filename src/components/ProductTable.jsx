import ProductCategory from "./ProductCategory";
import ProductRow from "./ProductRow";

function ProductTable({products, filterText, inStocked}) {
    const filterTextReg = filterText.length ? new RegExp(`${filterText}`, "i") : new RegExp(`.+`); 
    let filteredProducts = products.filter(product => filterTextReg.test(product.name));
    if(inStocked) filteredProducts = filteredProducts.filter(product => product.stocked);
    const categories = [...new Set(filteredProducts.map(prod => prod.category))];

    const table = categories.map(category =>{
        const currentCategoryProducts = filteredProducts.filter(product => {
            return product.category === category ? true : false;
        });

        const currentCategoryTable = currentCategoryProducts.map(product => {
            return <ProductRow 
                key={product.name}
                name={product.name} 
                price={product.price}
                stocked={product.stocked}/>
        });

        return <div key={category}>
            <ProductCategory category={category}/>
            {currentCategoryTable}
            <hr />
        </div>
    });

    return table;
}   

export default ProductTable;