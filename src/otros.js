import React, { Component } from 'react';
import { otro } from './otros.json';
import Tarjeta from './tarjeta.js'

class otros extends Component {
    constructor(props) {
        super(props)
        this.state = { otro }
    }
    render() {
        const otro = this.state.otro.map((otro, i) => {
            return (
                <div className="col-md-4">
                    <div className="card mt-4">
                        <Tarjeta imagen={otro.imagen} precio={otro.precio} nombre={otro.nombre} descripcion={otro.descripcion} />
                    </div>
                </div>
            )
        })
        return (
            <div className="container">
                <div className="row mt-4">
                    {otro}
                </div>

            </div>
        );
    }
}

export default otros;