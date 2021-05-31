import React from 'react'

function ItemHeroe({ heroe, eliminarHeroe }) {

    const {results} = heroe
    if(!results) return null;

    return (

            <div class="col-lg-4 col-md-12 col-sm-12 d-flex justify-content-center my-2 icono-wrap">
                <div className="card border-dark" style={{width: '18rem'}}>
                    <img src={results[0].image.url} className="card-img-top" alt={results[0].name}/>
                    <div className="card-body">
                        <h5 className="card-title">{results[0].name}</h5>
                        <ul>
                            <li>Intelligence: {results[0].powerstats.intelligence}</li>
                            <li>Strength:     {results[0].powerstats.strength}</li>
                            <li>speed:        {results[0].powerstats.speed}</li>
                            <li>Durability:   {results[0].powerstats.durability}</li>
                            <li>Power:        {results[0].powerstats.power}</li>
                            <li>Combat:       {results[0].powerstats.combat}</li>
                        </ul>
                        <a href="!#" onClick={ () => eliminarHeroe(results[0].id)} className="btn btn-primary">Eliminar</a>
                    </div>
                </div>
            </div>
    )
}

export default ItemHeroe
