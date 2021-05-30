import React, { Fragment } from 'react'
import ItemHeroe from './ItemHeroe'


function TablaHeroes({ heroes, eliminarHeroe }) {

    return (
        <Fragment>
            <div className="row mt-4">
                {heroes.map((heroe, index) => (
                    <ItemHeroe
                    key={index}
                    heroe={heroe}
                    eliminarHeroe ={eliminarHeroe}
                    />
                ))}
            </div>
        </Fragment>
    )

}

export default TablaHeroes
