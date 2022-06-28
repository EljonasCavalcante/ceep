import React, { Component } from "react";

export class FormularioCadastro extends Component {
    render() {
        return(
        <form>
            <input type="text" placeholder="Títilo"/>
                <textarea placeholder=" Escreva sua nota..."/>
            <button>Criar Nota</button>
        </form>
        );
    }
}