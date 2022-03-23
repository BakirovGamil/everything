import LocationPoint from "./LocationPoint";

const mapStyle = {
    width: 1080,
    height: 600,
    margin: "0 20px 0 0",
    position: "relative",
};

const imgStyle = {
    width: "100%",
    height: "100%",
    pointerEvents: "none",
};

function MapContent({locations, handlePointClick, selId}) {
    return (<div style={mapStyle}>
        <img style={imgStyle} src="https://infomens.com/upload/resize_cache/iblock/e33/1900_1900_1/e33a49b3e9ae2dd8aab6c61257a3ea7c.jpg"/>
        <LocationPoint locations={locations} handlePointClick={handlePointClick} selId={selId}/>
    </div>);
}

export default MapContent;