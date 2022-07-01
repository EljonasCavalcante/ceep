import React, { Component } from "react";
import CardNota from "./CardNota";
class LidaDeNotas extends Component {
    render(){
        return(
    <ul>
        {Array.of("Trablho", "Trablaho", "Estudo").map(categoria  => {
            return (
                <li>
                    <div>{categoria}</div>
                    <CardNota/>
                </li>    
            ) 
            })}   
        </ul>
        );
    }    
}

export default LidaDeNotas;