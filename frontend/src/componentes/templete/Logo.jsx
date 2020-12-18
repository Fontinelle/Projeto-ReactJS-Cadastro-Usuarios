import './Logo.css'
import React from 'react'
import { DiReact } from "react-icons/di";

const Logo = props =>
    <aside className="logo">
        <i className="text-info"><DiReact /></i> 
        <p className="text-info">Projeto React</p>
    </aside>

export default Logo