import React, { Component, useState } from "react";
import '../css/NavBarStyle.css';


export default function NavBar() {
    return(
        <div className="left-container">
            <h3>
                Home
            </h3>
            <h3>
                About
            </h3>
            <h3>
                Portfolio
            </h3>
        </div>
    );
}