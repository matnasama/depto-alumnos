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
import TituloSitiosImportantes from './components/Titulos/SitiosImportantes'
import SitiosImportantes from './components/SitiosImportantes/SitiosImportantes'
import Chatbot from './components/Chatbot.jsx'
import { tramites } from './data/data.json'
import { consultas } from './data/data.json'
import { sitios } from './data/data.json'

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
      <TituloSitiosImportantes />
      <SitiosImportantes sitios={sitios}/>
      <Chatbot />
      <Footer />
    </>
  )
}

export default App
