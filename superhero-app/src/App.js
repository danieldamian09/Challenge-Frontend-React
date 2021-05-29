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

          <TablaHeroes
            heroe={heroe}
          />
        </div>
      </header>
    </div>
  );
}

export default App;
