import React, { Component } from 'react';
import './App.css';
import Tarjeta from './tarjeta';
import firebase from 'firebase'


class consolas extends Component {
    constructor(props) {
        super(props)
        this.state = {
            consola: []
        }
    }

    componentDidMount = () => {
        const nameRef = firebase.database().ref('todos')
        nameRef.on('value', (snapshot) => {
            var scores = snapshot.val()
            this.setState({ consola: scores })
        })
    }

    render() {
        const consola = this.state.consola.map((consola, i) => {
            return (
                <div className="col-md-4"> 
                    {(consola.tipo2 == "Consola") ?
                            <div className="card mt-4">
                                <Tarjeta imagen={consola.imagen} precio={consola.precio} nombre={consola.nombre} descripcion={consola.descripcion} />
                            </div>
                        : ""
                    }
                </div>
            )
        })
        return (
            <div className="container" >
                <div className="row mt-4">
                    {consola}
                </div>
            </div>
        );
    }
}

export default consolas;