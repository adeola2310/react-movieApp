import React, {Component} from 'react';
import "./Single.css";

class Single extends Component {
    render() {
        return (
            <div className="singles__card">
                <div className="contents">
                <div className="the_image">
                    <img src={require('../../assests/movie.jpg')}/>
                </div>


                    <div className="the__text">
                        <h3>Bloodshot</h3>
                        <p>
                            After he and his wife are murdered, marine Ray Garrison is resurrected by a team of scientists. Enhanced with nanotechnology, he becomes a superhuman, biotech killing machine—'Bloodshot'. As Ray first trains with fellow super-soldiers, he cannot recall anything from his former life. But when his memories flood back and he remembers the man that killed both him and his wife, he breaks out of the facility to get revenge, only to discover that there's more to the conspiracy than he thought.
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Single;
