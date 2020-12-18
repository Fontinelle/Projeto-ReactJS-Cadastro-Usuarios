import './App.css'
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import { BrowserRouter } from 'react-router-dom'

import Logo from '../componentes/templete/Logo'
import Nav from '../componentes/templete/Nav'
import Route from './Routes'
import Footer from '../componentes/templete/Footer'


const App = props => {
  return (
    <BrowserRouter>
      <div className="app">
        <Logo></Logo>
        <Nav></Nav>
        <Route></Route>
        <Footer></Footer>
      </div>
    </BrowserRouter>
  )
}
export default App