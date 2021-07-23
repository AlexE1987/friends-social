import React from "react";
import spinner from "../../../assets/Spinner-1s-200px (1).gif";

let Preloader = (props) => {
    return <div>
        <img src={spinner} width='200' alt=""/>
    </div>
}
export default Preloader;