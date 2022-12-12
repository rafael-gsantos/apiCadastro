import './Main.css'
import React from 'react'

export default props =>
    <React.Fragment>
        <main className="content container-fluid">
            <div className="p-3 mt-0">
                {props.children}
            </div>
        </main>
    </React.Fragment>