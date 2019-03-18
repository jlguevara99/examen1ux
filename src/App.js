import React, { Component } from 'react';
import './App.css';
import { Link, Switch, Route, Redirect } from 'react-router-dom';
import home from './home'
import Cart from './cart'
import Tarjeta from './tarjeta'
import A1 from './A1';
import A2 from './A2';
import A3 from './A3';
import firebase from "firebase"


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isSignedIn: false,
      search: "",
      todos: [],
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (event) => {
    event.preventDefault();
    this.setState({
      [event.target.name]: "/sear/" + event.target.value
    })
  }

  handleSubmit = (event) => {
    alert(this.state.search);
    event.preventDefault();
  }

  componentDidMount = () => {
    firebase.auth().onAuthStateChanged(user => {
      this.setState({ isSignedIn: !!user })
    })
    const nameRef = firebase.database().ref('todos')
    nameRef.on('value', (snapshot) => {
      var scores = snapshot.val()
      this.setState({ todos: scores })
    })
  }

  render() {
    return (
      <div className="App">
        <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
          <ul class="navbar-nav navbar-custom">
            <li class="nav-item active">
              <a class="nav-link" href="/home"><img src="https://www.elizabethtowngas.com/Elkton/media/img/icon-house.png" width="25px" /></a>
            </li>
            <li class="nav-item active">
              <a class="nav-link" href="/consolas">Consoles</a>
            </li>
            <li class="nav-item active">
              <a class="nav-link" href="/games">Games</a>
            </li>
            <li class="nav-item active">
              <a class="nav-link" href="/otros">More</a>
            </li>
          </ul>
          <ul class="navbar-nav ml-auto">
            <form class="form-inline" action="/action_page.php" onSubmit={this.handleSubmit}>
              <input class="form-control mr-sm-2" name="search" type="text" placeholder="Search" onChange={this.handleChange} />
              <li class="nav-item active">
                <a class="nav-link" href={this.state.search} className="buttn2">Search</a>
              </li>
            </form>
            <li class="nav-item">
              <a class="nav-link" href="/cart" data-target="#myModal" data-toggle="modal">Sign in</a>
            </li>
          </ul>
        </nav>
        <home></home>
        <Switch>
          <Route path="/consolas" component={A1} />
          <Route path="/games" component={A2} />
          <Route path="/otros" component={A3} />
          <Route path="/home" component={home} />
          <Route path="/cart" component={Cart} />
          <Route path="/sear/:ser" render={
            ({ match }) => {
              const todos = this.state.todos.map((todos, i) => {
                return (
                  <div >
                    {
                      (todos.tipo.includes(match.params.ser)) || (todos.precio <= match.params.ser) || (todos.nombre.includes(match.params.ser)) ?
                        <div >
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
                <div>
                  {this.state.isSignedIn ? (
                    <div className="container">
                      <div className="row-mt-4">
                        {todos}
                      </div>
                    </div>
                  ) : (<Cart />)}
                </div>
              )
            }
          } />
        </Switch>
      </div>
    );
  }
}

export default App;
