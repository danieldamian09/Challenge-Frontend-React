import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import FormHeroes from './components/FormHeroes';
import TablaHeroes from './components/TablaHeroes';


function App() {
  // definir el estado de la aplicacion donde van a estar todos los super-heroes selecionados
  const [heroes, guardarHeroes] = useState([])
  const [name, guardarName] = useState()
  const [consulta, guardarConsulta] = useState(false)
  const [totalPoderes, guardarTotalPoderes] = useState(0)
  const [heroe, guardarHeroe] = useState({
    name: '',
    id: '',
    powerstats: '',
    biography: '',
    appearance: '',
    work: '',
    connections: '',
    image: ''
  })

  const agregarHeroesEstado = heroe => {
    guardarHeroes([
      ...heroes,
      heroe
    ])
    const { results } = heroe;
    let poderes = results[0].powerstats;
    const sumValues = (poderes) => Object.keys(poderes).reduce((acc, value) => acc + parseInt(poderes[value]), 0);
    // console.log(sumValues(poderes))
    guardarTotalPoderes(
      totalPoderes + sumValues(poderes)
    )
  }

  const guardarBusqueda = name => {
    guardarName(name)
  }

  useEffect(() => {
    const consultarApi = () => {
      if (consulta) {
        const apiKey = `10225291220969322`
        const url = `https://www.superheroapi.com/api.php/${apiKey}/search/${name}`

        axios.get(url)
          .then(res => {
            guardarHeroe(res.data)
            agregarHeroesEstado(res.data)
          })
          .catch(console.log())
      }
    }

    guardarConsulta(false)

    consultarApi()

  }, [consulta])

  // eliminar heroe
  const eliminarHeroe = id => {
    const nuevosGuardarHeroes = heroes.filter(heroe => heroe.results[0].id !== id);
    guardarHeroes(nuevosGuardarHeroes)
  }


  return (
    <div className="container">
      <header>
        <h1>SuperHero-App</h1>
        <div className="contenido-principal contenido">
          <FormHeroes
            agregarHeroesEstado={agregarHeroesEstado}
            guardarBusqueda={guardarBusqueda}
            guardarConsulta={guardarConsulta}
            heroe={heroe}
          />

          <div className="row d-flex justify-content-lg-end align-content-md-center align-content-sm-center mt-2">
            {totalPoderes ? <div className="col-lg-3 col-md-3 alert alert-primary">Total de poderes {totalPoderes}</div> : null}
          </div>

          <TablaHeroes
            heroes={heroes}
            eliminarHeroe={eliminarHeroe}
          />
        </div>
      </header>
    </div>
  );
}

export default App;
