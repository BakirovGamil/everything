const pointStyle = {
    display: "inline-block",
    minWidth: 15,
    minHeight: 15,
    maxWidth: 40,
    maxHeight: 40,
    backgroundColor: "red",
    borderRadius: 50
};


function LocationPoint({locations, handlePointClick, selId}) {
    const locationPoints = locations.map(location => {
        const coordsStyle = {
            left: location.coords[0],
            top: location.coords[1]
        }

        pointStyle.backgroundColor = "red";
        if(location.id === selId) {
            pointStyle.backgroundColor = "yellow";
        }

        const pointSizeStyle = {width: location.population / 100, height: location.population / 100};
        return (<div key={location.id} className="pointField" style={coordsStyle} onClick={handlePointClick.bind(null, location.id)}>
            <span style={{color: "white"}}>{location.name}</span>
            <span style={{...pointStyle, ...pointSizeStyle}}></span>
        </div>);
    });

    return <>{locationPoints}</>;
}

export default LocationPoint;