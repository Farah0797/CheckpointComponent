import React from "react";
import {adresse} from "../../Data/Data";

function Address(){
    return(
        
        <h1>{adresse.ville}{adresse.rue}</h1>
    );
}

export default Address;