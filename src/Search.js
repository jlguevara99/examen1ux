import React, { Component } from 'react';
import { todos } from './todos.json';
import './App.css';
import Tarjeta from './tarjeta';


class Search extends Component {
    constructor(props) {
        super(props)
        this.state = {
            todo: todos,
            valor: props.valo
        }
    }
    render() {
        const todos = this.state.todo.map((todos, i) => {
            return (
                <div className="container">
                    {
                        todos.tipo === "PlayStation"?
                            <div className="col-md-4">
                                <div className="card mt-4">
                                    <Tarjeta imagen={todos.imagen} precio={todos.precio} nombre={todos.nombre} descripcion={todos.descripcion} />
                                </div>
                            </div>
                            : ""
                    }
                </div>
            )
        })
        return (
            <div className="container">
                <div className="row mt-4">
                    {todos}
                </div>
                <p>+{this.state.valor}+ hola?</p>
            </div>
        );
    }
}

export default Search;