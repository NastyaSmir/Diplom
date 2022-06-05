import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Routes,
} from 'react-router-dom';

import backgroundImg from '.././assets/background3.jpg';
import '../App.css';
import LTL from './LTL';
import LFL from './LFL';
import Express from './Express';

function Service() {
    return (
            <div>
                <img
                    className="d-block w-100"
                    height='100%'
                    src={backgroundImg}
                    alt="Background"
                />
                <h3>Автомобильные грузоперевозки</h3>
                <div class="bulletedList">
                    <nav>
                        <ul class="example">
                            <li><Link to="lTL">Автомобильные перевозки сборных грузов</Link></li>
                            <li><Link to="lFL">Автомобильные перевозки генеральных грузов</Link></li>
                            <li><Link to="express">Экспресс-доставка грузов</Link></li>
                        </ul>
                    </nav>
                </div>
            <div className='service'>
                <Routes>
                    <Route path="/LTL" element={<LTL />} />
                    <Route path="/LFL" element={<LFL />} />
                    <Route path="/Express" element={<Express />} />
                </Routes>

            </div>
            </div>
    )
}
export default Service


// export default class Service extends Component {
//     render() {
//         <Router>
//                 <nav>
//                 <ul class="example">
//                             <li><Link to="/LTL.js">Автомобильные перевозки сборных грузов (LTL)</Link></li>
//                             <li><Link to="/LFL.js">Автомобильные перевозки генеральных грузов (FTL)</Link></li>
//                             <li><Link to="/Express.js">Экспресс-доставка грузов</Link></li>
//                         </ul>
//                 </nav>
//         </Router>
//         return (
//             <div>
//                 <img
//                     className="d-block w-100"
//                     height='100%'
//                     src={backgroundImg}
//                     alt="Background"
//                 />
//                 <h3>Автомобильные грузоперевозки</h3>
//                 <div class="bulletedList">
//                         <ul class="example">
//                             <li><a href="/LTL.js">Автомобильные перевозки сборных грузов (LTL)</a></li>
//                             <li><a href="/LFL.js">Автомобильные перевозки генеральных грузов (FTL)</a></li>
//                             <li><a href="/Express.js">Экспресс-доставка грузов</a></li>
//                         </ul>
//                 </div>
//             </div>
//         )
//     }
// }   