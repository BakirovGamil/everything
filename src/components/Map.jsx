import {useState} from "react"
import uuid from "react-uuid";
import InformationField from "./InformationField";
import MapContent from "./MapContent";

const locations = [
    { id: uuid(), name: 'hobbitown', cityType: 'Village', coords: [240, 120], population: 500},
    { id: uuid(), name: 'rivendell', cityType: 'City', coords: [700, 500], population: 3000},
    { id: uuid(), name: 'minas tirith', cityType: 'Metropolis', coords: [666, 55], population: 10000}
];

function Map() {
    const [selId, setSelId] = useState(locations[0].id);

    function getLocationById(id) {
        const foundLocation = locations.find(location => location.id === id);
        
        return foundLocation;
    }

    function handlePointClick(id) {
        setSelId(id);
    }

    return (<div style={{display: "flex"}}>
        <MapContent locations={locations} handlePointClick={handlePointClick} selId={selId}/>
        <InformationField currentLocation={getLocationById(selId)}/>
    </div>);
}

export default Map;