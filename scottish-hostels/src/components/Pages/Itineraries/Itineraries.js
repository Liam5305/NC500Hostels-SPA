import React from "react";
import DisplayItineraries from "../../DisplayItineraries/DisplayItineraries";
//import CreateNewItinery from "../../CreateItineraries/CreateNewItinerary";
import { Create } from "../../CreateItineraries/CreateNewItinerary";

export const Itineraries = () => {
    return (
    <>
        <h2>Itineraries</h2>
        <DisplayItineraries />
        <Create />
        {/* <CreateNewItinery /> */}
    </>
    )
};