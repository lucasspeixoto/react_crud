/*Main, como o componente principal, vai ter o conteúdo
e tambem uma referência para o header (pois vai ficar mudando) */
import './Main.css'
import React, {Fragment} from 'react'
import Header from './Header'

//eslint-disable-next-line
export default props =>
    <Fragment>
        <Header />
        <main className="content">
            Conteudo
        </main>
    </Fragment>