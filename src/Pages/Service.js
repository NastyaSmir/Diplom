import React, { Component } from 'react';
import backgroundImg from '../assets/background3.jpg';

export default class Home extends Component {
    render() {
        return (
            <div>
                <img
                    className="d-block w-100"
                    height='100%'
                    src={backgroundImg}
                    alt="Background"
                />
                <h3>Услуги</h3>

            </div>
        )
    }
}   