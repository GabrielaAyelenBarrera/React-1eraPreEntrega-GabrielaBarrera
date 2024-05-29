import { useContext, useState } from "react";
import { CartContext } from "./context/CartContext";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { Link } from "react-router-dom";

const Checkout = () => {
    const { cart, getCountProducts, getSumProducts } = useContext(CartContext);
    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [telephone, setTelephone] = useState("");
    const [orderId, setOrderId] = useState("");

    const generarOrden = async () => {
        const buyer = { nombre, email, telephone }; // Simplificación de la creación del objeto
        const items = cart.map(item => ({ id: item.id, title: item.nombre, price: item.precio }));
        const date = new Date().toLocaleString(); // Simplificación para obtener la fecha actual
        const order = { buyer, items, date, total: getSumProducts() };

        try {
            // Obtener la instancia de Firestore
            const db = getFirestore();
            // Agregar un nuevo documento a la colección "orders"
            const docRef = await addDoc(collection(db, "orders"), order);
            // Establecer el orderId con el ID del documento recién creado
            setOrderId(docRef.id);
        } catch (error) {
            console.error("Error al generar la orden:", error);
        }
    };

    if (getCountProducts() === 0) {
        return (
            <div className="container my-5">
                <div className="row">
                    <div className="col text-center">
                        <h3>No se encontraron productos en el carrito.</h3>
                        <Link to={"/"} className="btn text-white bg-dark rounded-0 my-5">Volver a la página principal</Link>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="container my-5">
            <div className="row">
                <div className="col">
                    <form>
                        <div className="mb-3">
                            <label htmlFor="nombre" className="form-label">Nombre</label>
                            <input id="nombre" type="text" className="form-control" value={nombre} onChange={(e) => setNombre(e.target.value)} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input id="email" type="text" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="telephone" className="form-label">Teléfono</label>
                            <input id="telephone" type="text" className="form-control" value={telephone} onChange={(e) => setTelephone(e.target.value)} />
                        </div>
                        <button type="button" className="btn text-white bg-dark" onClick={generarOrden}>Generar Orden</button>
                    </form>
                </div>
                <div className="col">
                    <table className="table">
                        <tbody>
                            {cart.map(item => (
                                <tr key={item.id}>
                                    <td><img src={item.imagen} alt={item.nombre} width={80} /></td>
                                    <td>{item.nombre}</td>
                                    <td>x{item.quantity}</td>
                                    <td className="text-end">${item.precio}</td>
                                </tr>
                            ))}
                            <tr>
                                <td colSpan={3}><b>Total</b></td>
                                <td className="text-end"><b>${getSumProducts()}</b></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="row my-5">
                <div className="col text-center">
                    {orderId && <div className="alert alert-light" role="alert">¡Felicidades! Tu ID de compra es: <b>{orderId}</b></div>}
                </div>
            </div>
        </div>
    );
};

export default Checkout;
