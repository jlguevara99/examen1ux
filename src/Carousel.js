import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
 
class DemoCarousel extends Component {
    render() {
        return (
            <Carousel showThumbs={false}  autoPlay>
                <div>
                    <img src="https://stmed.net/sites/default/files/red-dead-redemption-2-hd-wallpapers-33549-2522161.jpg"  width="600px" height="400px"/>
                  
                </div>
                <div>
                    <img src="https://images8.alphacoders.com/710/thumb-1920-710329.jpg"  width="600px" height="400px"/>
                   
                </div>
                <div>
                    <img src="https://4.bp.blogspot.com/-QhBe0WF_QSU/XB5SEOfRM1I/AAAAAAAALk4/ueu9hg-jIro6XOSoq62CyU93aLDbEsmQQCLcBGAs/s1920/mario-nintendo-switch-background.jpg"  width="600px" height="400px"/>
                    
                </div>
                <div>
                    <img src="https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/main_element/public/media/image/2018/02/shadow-colossus_7.jpg?itok=d1vm66XD"  width="600px" height="400px"/>
                    
                </div>
                <div>
                    <img src="https://media1.mensxp.com/media/content/2018/Sep/most-exciting-games-of-2018-that-are-topping-the-charts-right-now-1400x653-1537428478_1100x513.jpg" width="600px" height="400px"/>
                    
                </div>
            </Carousel>
        );
    }
};

export default DemoCarousel;