import React, {Component} from 'react';
import './Photogrid.css'
import {Link} from "react-router-dom";

class Photogrid extends Component {
    render() {
        return (
            <Link to='/singles'>
                <div className="card">
                    <img src={require('../../assests/movie.jpg')}/>
                    <div className="card__content">
                        <h5>Title</h5>
                        <p>Overview</p>
                    </div>
                </div>
            </Link>


        );
    }
}

export default Photogrid;
