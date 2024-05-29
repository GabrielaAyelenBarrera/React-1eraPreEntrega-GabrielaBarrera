import { Link } from "react-router-dom";
import cart from "/src/assets/images/cart.svg";
import { CartContext } from "./context/CartContext";
import { useContext } from "react";


const CartWindget = () => { 
    const {getCountProducts} = useContext (CartContext);

        if (getCountProducts() > 0) {
            return (
                <Link to={"/cart"} className="btn btn-secondary position-relative">
                <img src={cart} alt="Carrito" width={16}  style={{ filter: 'invert(1)' }}/>
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">{getCountProducts()}</span>
                </Link>
        
        )
        
     
      }

}

export default CartWindget