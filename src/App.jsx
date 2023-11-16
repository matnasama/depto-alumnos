import ControlledAccordions from './components/Tramites/Tramites'
import OutlinedCard from './components/Consultas/Consultas'
import Consultas from './components/Consultas/Titulo'
import Tramites from './components/Tramites/Titulo'
import './App.css'

function App() {

  return (
    <>
      <Consultas />
      <ControlledAccordions />
      <Tramites />
      <OutlinedCard />
    </>
  )
}

export default App
