import React from 'react';

import './app.css';
import travelImage from '../../asset/undraw_travelers_qlt1.svg';
import growImage from '../../asset/undraw_romantic_getaway_k2mf.svg';
import placeholder from '../../asset/placeholder.webm';
import placeholderQr from '../../asset/placeholder_qr.png';


function App(){
    return(
        <div>
            <video autoPlay muted loop id="myVideo">
                <source src={placeholder} type="video/webm"/>
            </video>
            <div className="app-main-view">
                <div className="app-main-view-text">
                    X  and Y Special Event blablablabla
                </div>
            </div>
            <div className="app-background-box">
                <div className="app-neon-text-shadow app-large-icon-wrapper">
                    <i className="fas fa-heart app-large-icon"></i><br></br>
                </div>
                <div className="app-separator-bar">
                    <div className="app-separator-box">
                        Lorem ipsum dolor sit amext
                    </div>
                </div>
                <div className="app-grid-wrapper">
                    <div className="app-left-box left-image-wrapper">
                        <img src={travelImage} className="left-image"></img>
                    </div>
                    <div className="app-main-box app-right-box">
                        <div className="app-center-text">
                        Lorem ipsum dolor sit amext, consectetur adipiscing elit. Duis a massa quis tortor condimentum varius a laoreet libero. Sed faucibus quis tellus nec aliquam. Nunc vitae pellentesque massa, vel vulputate nulla. Praesent feugiat luctus nisl. Aenean in dapibus eros. Curabitur sagittis augue mattis eleifend tempus. Phasellus vel mi augue. Vestibulum consectetur libero laoreet dolor laoreet luctus. Donec vestibulum ante sem, eu fringilla est iaculis id.
                        </div>
                    </div>
                </div>
            </div>
            <div className="app-background-box">
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <div className="app-neon-text-shadow app-large-icon-wrapper">
                    <i class="fas fa-tree app-large-icon"></i><br></br>
                </div>
                <div className="app-separator-bar">
                    <div className="app-separator-box">
                        Lorem ipsum dolor sit amext
                    </div>
                </div>
                <div className="app-lower-grid-wrapper">
                    <div className="app-main-box app-lower-left-box">
                       <div className="app-center-text">
                        Lorem ipsum dolor sit amext, consectetur adipiscing elit. Duis a massa quis tortor condimentum varius a laoreet libero. Sed faucibus quis tellus nec aliquam. Nunc vitae pellentesque massa, vel vulputate nulla. Praesent feugiat luctus nisl. Aenean in dapibus eros. Curabitur sagittis augue mattis eleifend tempus. Phasellus vel mi augue. Vestibulum consectetur libero laoreet dolor laoreet luctus. Donec vestibulum ante sem, eu fringilla est iaculis id.
                        </div>
                    </div>
                    <div className="app-lower-right-box grow-image-wrapper">
                        <img src={growImage} className="grow-image"></img>
                    </div>
                </div>
                <div className="app-qr-wrapper">
                    <div className="app-qr">
                        <span className="app-neon-text-shadow app-qr-text">
                            Lorem Ipsum QR hahaha
                        </span>
                        <br/>
                        <br/>
                        <br/>
                        <img src={placeholderQr}></img>
                    </div>
                </div>
            </div>
            <div>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
            </div>
            <div className="app-background-box">
                <div className="app-footer-content">
                    Lorem Ipsum Footer Here Adress etc c
                </div>
            </div>
        </div>
    );
}

export default App;