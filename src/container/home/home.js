import React, {Component} from 'react';
import './home.css';
import Photogrid from "../../components/Photogrid/Photogrid";
import axios from 'axios';

class Home extends Component {

    componentDidMount() {
       axios.get("")
    }

    render() {
        return (
            <div>
                <div className="header">
                    <h3 style={{color: 'white'}}> Reduxstargram</h3>
                </div>

                <div className="search">
                    <input type="text" placeholder="Search Movies"/>
                </div>

                <div className="content">
                    <div className="photo-grid">
                       <Photogrid/>
                       <Photogrid/>
                       <Photogrid/>
                       <Photogrid/>
                       <Photogrid/>
                       <Photogrid/>
                       <Photogrid/>
                    </div>

                </div>

                <div className="load">
                    <button className="more">Load More</button>
                </div>
            </div>
        );
    }
}

export default Home;
