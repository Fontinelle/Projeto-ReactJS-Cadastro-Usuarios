import './Header.css'
import React from 'react'

const Header = props =>
    <header className="header d-nome flex-columm">
        <h1 className="mt-3">
            <i className={`fa fa-${props.icon}`}></i> {props.title}
        </h1>
        <p className='lead text-muted br'>{props.subtitle}</p>
    </header>

export default Header