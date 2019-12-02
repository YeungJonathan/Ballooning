import React, { Component } from "react";
import '../css/HomeStyle.css';
import mainPhoto from '../assets/main_photo.jpeg';

export default class Home extends Component{ 

    render() {
        return(
            <div className="main-photo">
                <img src={mainPhoto} alt="main photo"/>
            </div>
        )
    }

}