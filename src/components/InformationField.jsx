function InformationField({currentLocation}) {
    return (<div>
        <input disabled type="text" value={currentLocation.name}/> <br/>
        <input disabled type="text" value={currentLocation.cityType}/> <br/>
        <input disabled type="text" value={currentLocation.coords}/> <br/>
        <input disabled type="text" value={currentLocation.population}/> <br/>
    </div>);
}

export default InformationField;