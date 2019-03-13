import React, { Component } from 'react';
import { juegos } from './juegos.json';
import Tarjeta from './tarjeta.js'

class games extends Component {
    constructor(props) {
        super(props)
        this.state = { juegos }
    }
    render() {
        const juegos = this.state.juegos.map((juegos, i) => {
            return (
                <div className="col-md-4">
                    <div className="card mt-4">
                        <Tarjeta imagen={juegos.imagen} precio={juegos.precio} nombre={juegos.nombre} descripcion={juegos.descripcion} />
                    </div>
                </div>
            )
        })
        return (
            <div className="container">
                <div className="row mt-4">
                    {juegos}
                </div>

            </div>
        );
    }
}

export default games;