import Header from './components/Header/Header'
import TituloTramites from './components/Titulos/TituloTramites'
import Consultas from './components/Consultas/Consultas'
import TituloConsultas from './components/Titulos/TituloConsultas'
import Tramites from './components/Tramites/Tramites'
import Footer from './components/Footer/Footer'
import Info from './components/Info/Info'
import Banner from './components/Banner/Banner'
import Sitios from './components/Sitios/Sitios'
import TituloSitios from './components/Titulos/TituloSitios'
import TituloReglamentos from './components/Titulos/TituloReglamentos'
import Documentos from './components/Documentos/Documentos'
import { tramites } from './data/data.json'
import { consultas } from './data/data.json'
import './App.css'

function App() {

  return (
    <>
      <Header />
      <Banner />
      <Info />
      <TituloConsultas />
      <Consultas consultas={consultas}/>
      <TituloTramites />
      <Tramites tramites={tramites}/>
      <TituloSitios />
      <Sitios />
      <TituloReglamentos />
      <Documentos />
      <Footer />
    </>
  )
}

export default App
