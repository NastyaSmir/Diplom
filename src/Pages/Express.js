import React, { Component } from 'react';
import backgroundImg from '../assets/background3.jpg';
import '../App.css';
import './Service';

export default class Express extends Component {
    render() {
        return (
            <div>
                <img
                    className="d-block w-100"
                    height='100%'
                    src={backgroundImg}
                    alt="Background"
                />
                <p class="info">Экспресс-доставка грузов<br />
                    В соответствии с вашими пожеланиями мы готовы в кратчайшие сроки организовать и осуществить для вас сверхбыструю 
                    автомобильную доставку — практически как самолетом, только в два раза дешевле.
                </p>
            </div>
        )
    }
} 