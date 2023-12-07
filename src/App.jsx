import Header from './components/Header/Header'
import TituloTramites from './components/Tramites/Titulo'
import ControlledAccordions from './components/Consultas/Consultas'
import Consultas from './components/Consultas/Titulo'
import BasicCard from './components/Tramites/TramiteReact'
import Footer from './components/Footer/Footer'
import Banner from './components/Banner/Banner'
import { tramites } from './data/data.json'
import { consultas } from './data/data.json'
import './App.css'

function App() {

  return (
    <>
      <Header />
      <Banner />
      <div className="info">
        <p>A través del siguiente espacio usted podrá informarse acerca de todos los trámites que puede realizar en el Departamento de Alumnos, incluso podrá iniciar algunas gestiones y/o descargar formularios necesarios para los trámites que así lo requieran.
        En esta plataforma usted también podrá encontrar respuestas a las preguntas frecuentes que servirán de ayuda y acompañamiento durante el desarrollo de la cursada.
        En caso de no encontrar el trámite que desea realizar o la respuesta a sus inquietudes podrá realizar su consulta a nuestros canales de contacto.</p>
      </div>
      <TituloTramites />
      <BasicCard tramites={tramites}/>
      <Consultas />
      <ControlledAccordions consultas={consultas}/>
      <Footer />
    </>
  )
}

export default App
