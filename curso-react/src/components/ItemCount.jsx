
import React, { useState, useEffect } from "react";

const ItemCount= () => {
    const [contador, setContador] = useState(0);
    const [stock, setStock] = useState(10);
    const [mostrarAlerta, setMostrarAlerta] = useState(false);
    const [detenerContador, setDetenerContador] = useState(false);

    function incrementar() {
        if (!detenerContador) {
            setContador(contador + 1);
            setStock(stock - 1); // Disminuir el stock cada vez que se presiona el botón "Incrementar"
            setMostrarAlerta(false); // Ocultar la alerta cuando se hace clic en "Añadir al carrito"
            setDetenerContador(false); // Restablecer la funcionalidad del contador y el stock
        }
    }

    function decrementar() {
        if (contador > 0) {
            setContador(contador - 1);
            setStock(stock + 1); // Incrementar el stock al eliminar un artículo del carrito
            setMostrarAlerta(false); // Ocultar la alerta cuando se hace clic en "Eliminar del carrito"
            setDetenerContador(false); // Restablecer la funcionalidad del contador y el stock
        }
    }

    useEffect(() => {
        console.log(`${contador}-Hay ${stock} conjuntos disponibles`);
        if (stock === 0) {
            console.log("Hay 0 conjuntos disponibles");
            setMostrarAlerta(true); // Mostrar la alerta cuando el stock llega a cero
            setDetenerContador(true); // Detener el contador y el stock
        }
    }, [contador, stock]); // Agrega contador y stock como dependencias
    

    // Función para manejar el cierre de la alerta
    const handleCloseAlert = () => {
        setMostrarAlerta(false);
    };

    return (
        <div>
            <p>Cantidad de productos: {contador}</p>
            <p>Stock: {stock}</p>
            <div className="btn-group" role="group">
                <button className="btn bg-black text-white" onClick={incrementar}>Añadir al carrito</button>
                <button className="btn bg-danger text-white" onClick={decrementar}>Eliminar del carrito</button>
            </div>
            {mostrarAlerta && (
                <div className="row my-2">
                    <div className="col">
                        <div className="alert alert-danger" role="alert">
                            ¡No hay más stock disponible!
                            <button type="button" className="close" onClick={handleCloseAlert}>
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ItemCount;