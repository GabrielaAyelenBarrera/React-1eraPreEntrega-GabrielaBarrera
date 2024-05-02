/*/ Componente Hijo, no hace falta exportar
const ChildrenTitulo = ({texto}) => {//Opcion 1-Desestructuro la prop desde parametro
    return(
        <div className="bg-dark text-warning p-5 display-3">
        {texto}
        </div>)}

// Componente Hijo, no hace falta exportar
const ChildrenContenido = (props) => {//Opcion 2-Recibimos un objeto como parametro y accedemos a las propiedades
//Con {props.children} se carga todo lo q este dentro de un con children
    return(
        <>
         <p className="text-dark p-3 display-6"> {props.texto}</p>
        <div>
            {props.children}
     </div>
        </>
)}

const LogoCoder = () =>{
return(
 <div>
       <h1 className="bg-dark text-warning p-5 display-3">CODERHOUSE</h1>
 </div>
)}
// Componente Padre
const CompFather = () => {
  
    return(
        <div>
           <ChildrenTitulo texto="Curso React JS"/>
           <ChildrenContenido texto="Aprendiendo componentes padres e hijos.">
             <p>Curso</p>
             <p>Materia</p><LogoCoder/>
          </ChildrenContenido>
          

        </div>)}

export default CompFather ; */