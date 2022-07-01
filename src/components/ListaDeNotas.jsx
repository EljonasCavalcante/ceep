import React, { Component } from "react";
import CardNota from "./CardNota";

class LidaDeNotas extends Component {
    render(){
        return(
    <ul>
        {Array.of("Trablho", "Trablaho", "Estudo").map()}   
    </ul>
    );
    }    
}

export default LidaDeNotas;