import React, { Component } from 'react';
import firebase from 'firebase';
import Tarjeta from './tarjeta.js';

class otros extends Component {
    constructor(props) {
        super(props)
        this.state = {
            otro: []
        }
    }

    componentDidMount = () => {
        const nameRef = firebase.database().ref('todos')
        nameRef.on('value', (snapshot) => {
            var scores = snapshot.val()
            this.setState({ otro: scores })
        })
    }

    render() {
        const otro = this.state.otro.map((otro, i) => {
            return (
                <div className="col-md-4"> 
                    {(otro.tipo2 == "Otro") ?
                            <div className="card mt-4">
                                <Tarjeta imagen={otro.imagen} precio={otro.precio} nombre={otro.nombre} descripcion={otro.descripcion} />
                            </div>
                        : ""
                    }
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