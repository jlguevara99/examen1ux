import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Carousel from './Carousel';

class home extends Component {

    render() {
        return (
            <div>
                <Carousel></Carousel>
                <br></br><br></br><br></br><br></br>
                <div className="row">
                    <div className="col-sm-6">
                        <h1 className="head">
                            Game Door
                    </h1>
                        <p className="par"> Here in Game Door we sell the highest quality VideoGame related products, you can find anything, from your favorite console
                            to your favorite game, even gadgets, so stay tuned and give a look around.
                    </p>

                    </div>
                    <div className="col-sm-6">
                        <img src="Logo.png" width="250px" height="250px" />
                    </div>
                </div>

                <br></br><br></br>
                <h1>
                    New Games
                </h1>
                <div className="embed-responsive embed-responsive-16by9">
                    <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/btvT_UN4hEg" allowfullscreen frameborder="0" width="300px" height="200px" />
                </div>
            </div>

        );
    }
}

export default home;


