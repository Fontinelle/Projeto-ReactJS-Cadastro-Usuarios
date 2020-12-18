import React from 'react'
import Main from '../templete/Main'

const Home = props =>
    <Main
        icon='home'
        title='Início'
        subtitle='Segundo Projeto do capítulo de React.'
    >
        <div className="display-4">Bem Vindo</div>
        <hr />
        <p className="mb-0">
            Projeto de cadastro de usuários desenvolvido em React!</p>
    </Main>

export default Home