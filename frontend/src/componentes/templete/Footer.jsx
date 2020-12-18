import './Footer.css'
import React from 'react'
import { DiReact } from "react-icons/di";

const Footer = props =>
    <footer className="footer pb-2 ">
        <span>
            Desenvolvido com <h5 className="text-info"><DiReact /></h5> por <strong>Epitácio Fontinelle</strong>
        </span>
    </footer>

export default Footer