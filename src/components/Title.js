import React from "react";
import "../App.css"

function Title(props){
    return (
     <div className="row">
         <div className="col-10 max-auto my-2 text-center text-title">
    <h1 className="text-capitalize font-weight-bold mx-3">{props.name}<span className="text-capitalize font-weight-bold mx-3">{props.title}</span></h1>
         </div>
     </div>
    )
}
export default Title;