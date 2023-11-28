import TituloTramites from './components/Tramites/Titulo'
import ControlledAccordions from './components/Consultas/Consultas'
import Consultas from './components/Consultas/Titulo'
import Tramites from './components/Tramites/Tramites'
import { tramites } from './data/tramites.json'
import './App.css'

function App() {

  return (
    <>
      <TituloTramites />
      <Tramites tramites={tramites}/>
      <Consultas />
      <ControlledAccordions tramites={tramites}/>
    </>
  )
}

export default App
