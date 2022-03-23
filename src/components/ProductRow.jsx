function ProductRow({name, price, stocked}) {
    const elem = (<>
        <span>{name} ....... </span>
        <span>{price}</span>
    </>);

    return (<div>
        {stocked
            ? elem
            : <strong>{elem}</strong>
        }
    </div>);
}


export default ProductRow;