import NavBar from './components/NavBar'
import './App.css'
import Hero from './components/Hero'
import Destacados from './components/Destacados'
import PropYstates from './components/PropYstates'
import CompFn from './components/CompFn'
import Carousel from './components/Carousel'
import Footer from './components/Footer'
curso-react/src/App.jsx -text



function App() {


  return (
    <>
        <NavBar/>
        <Hero/>
        <Destacados/>
        <PropYstates titulo ={"Encanto Nocturno: Explora la Seducción con nuestros conjuntos"} parrafo= {"Imagina la elegancia y la sensualidad fusionadas en un solo conjunto: el encaje negro, una declaración atemporal de seducción. Este conjunto es más que ropa íntima; es una expresión de confianza y poder femenino. Cada detalle meticulosamente tejido en encaje negro resalta la belleza natural del cuerpo, mientras que su suave tacto envuelve la piel con una delicadeza incomparable. Con su aura de misterio y sofisticación, este conjunto invita a explorar un mundo de pasión y romance. Es el toque perfecto para una noche especial, donde la confianza y la feminidad se funden en una danza etérea de sensualidad."} />
        <CompFn/>
        <Carousel/>
        <Footer/>




    </>
  )
}

export default App
