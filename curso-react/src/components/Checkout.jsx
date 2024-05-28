import { useEffect, useState } from "react";
//import arrayProductos from "../components/json/productos.json";
import { addDoc, collection, getDocs, getFirestore } from "firebase/firestore";

const Checkout = () => {
    const [cart, setCart] = useState([]);
    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [telephone, setTelephone] = useState("");
    const [orderId, setOrderId] = useState("");

    // Cargo los productos vía FireStore
    useEffect(() => {
        const db = getFirestore();
        const itemsCollection = collection(db, "items");
        getDocs(itemsCollection).then(snapShot => {
            if (snapShot.size > 0) {
                setCart(snapShot.docs.map(item => ({id:item.id, ...item.data()})));


            }


        });

      },[]);


    const calcularTotal = () => {
        return cart.reduce((acumulador, item) => acumulador += item.precio, 0);
    }

    const generarOrden = () => {
        const buyer = {nombre:nombre, email:email, telephone:telephone};
        const items = cart.map(item => ({id:item.id, title:item.nombre, price:item.precio}));
        const order = {buyer:buyer, items:items, total:calcularTotal()};
        console.log(order);
    

        const db = getFirestore();
        const ordersCollection = collection(db, "orders");
            addDoc(ordersCollection, order).then(data =>{
                setOrderId(data.id);


            });
      

    }

    return (
        <div className="container my-5">
            <div className="row">
                <div className="col">
                    <form>
                        <div className="mb-3">
                            <label className="form-label">Nombre</label>
                            <input type="text" className="form-control" onInput={(e) => {setNombre(e.target.value)}} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Email</label>
                            <input type="text" className="form-control" onInput={(e) => {setEmail(e.target.value)}} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Telephone</label>
                            <input type="text" className="form-control" onInput={(e) => {setTelephone(e.target.value)}} />
                        </div>
                        
                        <button type="button" className="btn text-white bg-black" onClick={generarOrden}>Generar Orden</button>
                    </form>
                </div>
                <div className="col">
                    <table className="table">
                        <tbody>
                            {cart.map(item => (
                                <tr key={item.id}>
                                    <td><img src={item.imagen} alt={item.nombre} width={80} /></td>
                                    <td>{item.nombre}</td>
                                    <td className="text-end">${item.precio}</td>
                                </tr>
                            ))}
                            <tr>
                                <td colSpan={2}><b>Total</b></td>
                                <td className="text-end"><b>${calcularTotal()}</b></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="row my-5">
                <div className="col text-center">
                    {orderId ? <div className="alert alert-light" role="alert">Felicitaciones! Tu ID de Compra es: <b>{orderId}</b></div> : ""}
                </div>
            </div>
        </div>
    )
}

export default Checkout;