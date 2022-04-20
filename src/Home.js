import React from "react";
import { useState } from "react";
import Footer from "./Footer";
import image from './img.jpg';
import Navigation from "./Navigation";
import Slideshow from './Slideshow';

const Menu = () => {
    let today = new Date().toLocaleTimeString();
    const [current, settime] = useState(today);
    const updatetime = () => {
        today = new Date().toLocaleTimeString();
        settime(today);
    };
    setInterval(updatetime, 1000);
    const setdate = new Date().toLocaleDateString();
    return (
        <>
            <div className="headerstyle">
                <img src={image} className="logostyle" />
                <p className="clock">
                    <i>
                        {current}
                        <br />
                        {setdate}
                    </i>
                </p>
            </div>
            <div>
                <Navigation />
            </div>
            <div><Slideshow /></div>
            <br /><br /><br /><br />
            <div><Footer /></div>
        </>
    );
};
export default Menu;



