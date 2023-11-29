import TituloTramites from './components/Tramites/Titulo'
import ControlledAccordions from './components/Consultas/Consultas'
import Consultas from './components/Consultas/Titulo'
import BasicCard from './components/Tramites/TramiteReact'
import { tramites } from './data/data.json'
import { consultas } from './data/data.json'
import './App.css'

function App() {

  return (
    <>
      <TituloTramites />
      <BasicCard tramites={tramites}/>
      <Consultas />
      <ControlledAccordions consultas={consultas}/>
    </>
  )
}

export default App
