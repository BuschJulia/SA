import React from 'react';
import './TelaLogin.css';
import Navbar from '../components/Navbar';
import Cover from '../assets/images/cover.png';
import Login from '../components/Login';
import '../pages/TelaLogin.css'
import '../components/Global.css'

function Home() {
    return (
        <div>
            <Navbar />
            <div className="container">
                <img className="direita" src={Cover} alt="" />
                < Login/>
            </div>
        </div>
    );
}
export default Home;