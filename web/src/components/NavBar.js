import React, { Component, useState } from "react";
import '../css/NavBarStyle.css';
import appStore from '../stores/AppStore';


export default function NavBar() {
    return(
        <>
            <a onClick={()=>appStore.setCurrentPage("Main")} className="section-name">
                Home
            </a>
            <a onClick={()=>appStore.setCurrentPage("About")} className="section-name">
                About
            </a>
            <a onClick={()=>appStore.setCurrentPage("Portfolio")} className="section-name">
                Portfolio
            </a>
            <a onClick={()=>appStore.setCurrentPage("Projects")} className="section-name">
            Projects
            </a>
            <a onClick={()=>appStore.setCurrentPage("Contacts")} className="section-name">
            Contacts
            </a>
        </>
    );
}