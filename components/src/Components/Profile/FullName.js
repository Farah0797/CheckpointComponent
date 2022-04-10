import React from "react"
import {name} from "../../Data/Data"

function Fullname(){
    return(
        <h2>{name.firstname}{name.lastname}</h2>
    );
}

export default Fullname;