import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Link, Switch, Route, Redirect } from 'react-router-dom';
import consolas from './consolas';
import games from './games'
import otros from './otros'
import home from './home'
import cart from './cart'
import Tarjeta from './tarjeta'
import Search from './Search';
import { todos } from './todos.json';



class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      search: "",
      todo:todos,
      arr:[]
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  addItem(newItem){
    this.setState({
      arr : [...this.state.arr,newItem]
    })
  }

  handleChange = (event) => {
    event.preventDefault();
    this.setState({
      [event.target.name]: "/sear/"+event.target.value
    })
  }
  handleSubmit = (event) => {
    alert(this.state.search);

    event.preventDefault();
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
        {/*}<img src="https://www.freeiconspng.com/uploads/pikachu-png-icon-32.png" className="App-logo" alt="logo" />{*/}
        <home></home>

        <Switch>
          <Route path="/consolas" component={consolas} />
          <Route path="/games" component={games} />
          <Route path="/otros" component={otros} />
          <Route path="/home" component={home} />
          <Route path="/cart" component={cart} />
          <Route path='/Search' render={(props) => (
            <Search {...props} valo={this.state.search} />
          )} />
          <Route path="/sear/:ser" render={
            ({match}) => {
              const todos = this.state.todo.map((todos, i) => {
                return (
                  <div >
                    {
                      (todos.tipo.includes(match.params.ser)) || (todos.precio <=  match.params.ser) || (todos.nombre.includes(match.params.ser))?
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
              return (<div className="container">
                <div className="row-mt-4">
                  {todos}
                </div>
              </div>)
            }
          } />

        </Switch>
        <footer className="foot">
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                Game Door™
              </div>
              <div className="col-md-4">

              </div>
              <div className="col-md-4">
                Contact us
              </div>

            </div>
            <div className="row">
              <div className="col-md-4">
                TheGameDoor2000@gmail.com
              </div>
              <div className="col-md-4">

              </div>
              <div className="col-md-4">
                +1 180-895-1523
              </div>
            </div>
          </div>
        </footer>
      </div>

    );
  }
}

export default App;
