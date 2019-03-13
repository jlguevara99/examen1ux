import React, { Component } from 'react';
import './App.css';
import Cart from './cart.js';

class tarjeta extends Component {
    constructor(props) {
        super(props)
        this.state = {
            precio: props.precio,
            tipo: props.tipo,
            descripcion: props.descripcion,
            nombre: props.nombre,
            imagen: props.imagen
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        alert("Se ha realizado la compra de "+this.state.nombre+"\n"+"por el precio de $"+this.state.precio);
    
    }

    
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="box">
                    <img src={this.state.imagen} width="150px" height="150px" />
                    <p>Precio: ${this.state.precio} </p>
                    <p>Nombre: {this.state.nombre}</p>
                    <input className="buttn" type="submit" value="Proceed to checkout"/>
                </div>
            </form>

        );
    }
}

export default tarjeta;