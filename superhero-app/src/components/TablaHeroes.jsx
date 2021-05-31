import React, { Fragment } from 'react'
import ItemHeroe from './ItemHeroe'


function TablaHeroes({ heroes, eliminarHeroe }) {

    return (
        <Fragment>
            <div className="mt-2 text-center">
                <div class="row w-80 mx-auto">
                {heroes.map((heroe, index) => (
                    <ItemHeroe
                    key={index}
                    heroe={heroe}
                    eliminarHeroe ={eliminarHeroe}
                    />
                ))}
                </div>
            </div>
        </Fragment>
    )

}

export default TablaHeroes
