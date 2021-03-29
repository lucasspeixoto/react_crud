/*Main, como o componente principal, vai ter o conteúdo
e tambem uma referência para o header (pois vai ficar mudando) */
import './Main.css'
import React, { Fragment } from 'react'
import Header from './Header'

//eslint-disable-next-line
export default props =>
    <Fragment>
        <Header {...props} /> {/* Header passa a receber as propriedades de main (icon, title e subtitle) */}
        <main className="content container-fluid">
            <div className="p-3 mt-3">
                {props.children}
            </div>
        </main>
    </Fragment>