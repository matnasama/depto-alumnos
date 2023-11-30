import Header from './components/Header/Header'
import TituloTramites from './components/Tramites/Titulo'
import ControlledAccordions from './components/Consultas/Consultas'
import Consultas from './components/Consultas/Titulo'
import BasicCard from './components/Tramites/TramiteReact'
import Footer from './components/Footer/Footer'
import { tramites } from './data/data.json'
import { consultas } from './data/data.json'
import './App.css'

function App() {

  return (
    <>
      <Header />
      <div className="banner"></div>
      <TituloTramites />
      <BasicCard tramites={tramites}/>
      <Consultas />
      <ControlledAccordions consultas={consultas}/>
      <Footer />
    </>
  )
}

export default App
