import React, { useState } from 'react'
import ItemHeroe from './ItemHeroe'

function FormHeroes({  guardarBusqueda, guardarConsulta}) {


    const [error, guardarError] = useState(false);

    const guardarInformacionInput = e => {
        
        guardarBusqueda(
            e.target.value
        )
    }

    const guardarBusquedaHeroe = e => {
        e.preventDefault();
        const name = e.target.value
        // const name = nameRef
        if(name === ''){
            guardarError(true)
            return;
        }
        guardarError(false);

        guardarConsulta(true)
    }


    return (
        <div>
            <form
                onSubmit={guardarBusquedaHeroe}
            >
                {error ? <p className="alert alert-danger" role="alert">Todos los campos son obligatorios</p> : null}
                
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Nombre del Super Heroe</label>
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        name="name"
                        onChange={guardarInformacionInput}
                        
                    />
                </div>
                <button type="submit" className="btn btn-primary">Buscar</button>
            </form>
        </div>
    )
}

export default FormHeroes
