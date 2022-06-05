import React, { Component, useState } from 'react';

import backgroundImg from '../assets/background3.jpg';
import Log_in from './Log_in';
import useToken from './useToken';

function Cargo() {
    const { token, setToken } = useToken();

    if (!token) {
        return <Log_in setToken={setToken} />
    }

    return (
        <div>
            <img
                className="d-block w-100"
                height='100%'
                src={backgroundImg}
                alt="Background"
            />
            <h3>Заказ</h3>
            <p>Мы рады, что вы с нами. </p>
            {/* <div class="order">
                <form>

                    <label>
                        Имя:
                        <input type="text" name="name" title='ФИО/Организация' />
                    </label>
                    <input type="submit" value="Отправить" />
                </form>
            </div> */}

            <div className='form'>
            <h4>Оставить заявку</h4>
                <div className='request'>
                <div className='div1'>
                    <input className='input' title='ФИО' placeholder="ФИО/Организация*" required />
                    <input className='input' title='Телефон' placeholder="Телефон*" required />
                    <input className='input' title='Email' placeholder="Email*" required />
                </div>
                <div>
                    <input className='div2' title='Сообщение' placeholder="Сообщение" />
                </div>
                </div>
                <button className='button2'>Отправить</button>
            </div>

            {/* <div class="button1">
                <button variant="contained" color="primary">
                    Войти
                </button>
            </div>
            <div class="button2">
                <button variant="contained" color="secondary">
                    Зарегистрироваться
                </button>
            </div> */}
            {/* <div class="button1">
                    <Form inline >
                        <FormControl
                            type="text"
                            placeholder="Войти"
                            className="mr-sm-2"
                        />
                        <Button variant="outline-info">Войти</Button>
                    </Form>
                </div>
                <div class="button2">
                    <Form inline >
                        <FormControl
                            type="text"
                            placeholder="Sign up"
                            className="mr-sm-2"
                        />
                        <Button variant="outline-info">Зарегистрироваться</Button>
                    </Form>
                </div> */}

            {/* <button onClick="windows.location.href='https://w3docs.com';">Click</button> */}

        </div>
    )
}
export default Cargo;

