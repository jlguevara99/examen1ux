import React, { Component } from 'react';
import { consola } from './consola.json';
import './App.css';
import Tarjeta from './tarjeta';

class consolas extends Component {
    constructor(props) {
        super(props)
        this.state = { consola }
    }
    render() {
        const consola = this.state.consola.map((consola, i) => {
            return (
                <div className="col-md-4">
                    <div className="card mt-4">
                    <Tarjeta imagen={consola.imagen} precio={consola.precio} nombre={consola.nombre} descripcion={consola.descripcion} />
                    </div>
                </div>
            )
        })
        return (
            <div className="container">
                <div className="row mt-4">
                    {consola}
                </div>
            </div>
        );
    }
}

export default consolas;