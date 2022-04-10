import React from "react"
import {picture} from "../../Data/Data";

function Profile(){
    return(
       <>
       <img src={picture} alt="" style={{width:'400px',height:'400px'}}/>
       </>
    );
}

export default Profile;