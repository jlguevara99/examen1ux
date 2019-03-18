import React, { Component } from 'react';
import firebase from 'firebase';
import Tarjeta from './tarjeta.js';

class games extends Component {
    constructor(props) {
        super(props)
        this.state = {
            juegos: []
        }
    }

    componentDidMount = () => {
        const nameRef = firebase.database().ref('todos')
        nameRef.on('value', (snapshot) => {
            var scores = snapshot.val()
            this.setState({ juegos: scores })
        })
    }

    render() {
        const juegos = this.state.juegos.map((juegos, i) => {
            return (
                <div className="col-md-4"> 
                    {(juegos.tipo2 == "Juego") ?
                            <div className="card mt-4">
                                <Tarjeta imagen={juegos.imagen} precio={juegos.precio} nombre={juegos.nombre} descripcion={juegos.descripcion} />
                            </div>
                        : ""
                    }
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