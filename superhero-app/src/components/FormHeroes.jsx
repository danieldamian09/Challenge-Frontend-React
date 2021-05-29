import React, { useState } from 'react'
import ItemHeroe from './ItemHeroe'

function FormHeroes({agregarHeroesEstado, guardarBusqueda, guardarConsulta}) {

    const [heroe, guardarHeroe] = useState({
        name:'',
        id:'',
        powerstats:'',
        biography:'',
        appearance:'',
        work:'',
        connections:'',
        image:''
    })

    const [error, guardarError] = useState(false);

    const {name, id, powerstats, biography, appearance, work, connections, image} = heroe;

    const guardarInformacionInput = e => {
        guardarHeroe({
            ...heroe,
            [e.target.name] : e.target.value
        })
    }

    const guardarBusquedaHeroe = e => {
        e.preventDefault();
        if(name.trim() === ''){
            guardarError(true)
            return;
        }
        guardarError(false);

        guardarConsulta(true)

        agregarHeroesEstado(heroe);

        guardarBusqueda(name)

        guardarHeroe({
        name:'',
        id:'',
        powerstats:'',
        biography:'',
        appearance:'',
        work:'',
        connections:'',
        image:''
        })

    }


    return (
        <div>
            <form
                onSubmit={guardarBusquedaHeroe}
            >
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Nombre del Super Heroe</label>
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        name="name"
                        value={name}
                        onChange={guardarInformacionInput}
                    />
                </div>
                <button type="submit" className="btn btn-primary">Buscar</button>
            </form>
        </div>
    )
}

export default FormHeroes
