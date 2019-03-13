import React, { Component } from 'react';

class cart extends Component {
    constructor(props) {
        super(props)
        this.state = {
            nombre: "",
            pass:"",
            correo: "",
            edad: "",
            direccion: ""
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
        alert("Login as:" + this.state.nombre);

    }
    render() {

        return (
            <div>
                <h1 className="head">Sign In</h1>
                <form className="formt" onSubmit={this.handleSubmit}>

                    <p>User: <input type="text" name='nombre' onChange={this.handleChange}></input></p>
                    <br></br>
                    <p>Password: <input type="password" name='pass' onChange={this.handleChange}></input></p>
                    <br></br>
                    <p>Gender: <input type="text" name='correo' onChange={this.handleChange}></input></p>
                    <br></br>
                    <p>Age: <input type="text" name='edad' onChange={this.handleChange}></input></p>
                    <br></br>
                    <p>Adress: <input type="text" name='direccion' onChange={this.handleChange}></input></p>
                    <br></br>
                    <input className="buttn" type="submit" value="Submit" />
                </form>
            </div>
        );
    }
}

export default cart;