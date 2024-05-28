import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar"
import ItemListContainer from "./components/ItemListContainer"
import Footer from "./components/Footer"
import ItemDetailContainer from "./components/ItemDetailContainer"
import Error404 from "./components/Error404"
import CartContextProvider from "./components/context/CartContext";
import Container from "./components/Container";
import Checkout from "./components/Checkout";


function App() {
  return (
    <CartContextProvider>
    <BrowserRouter>

      <NavBar />
      <Routes>    
        <Route path={"/"} element={<ItemListContainer />} />
        <Route path={"/category/:id"} element={<ItemListContainer />} />
        <Route path={"/item/:id"} element={<ItemDetailContainer />} />
        <Route path={"*"} element={<Error404 />} />
      </Routes>

    </BrowserRouter>     <Checkout/>
    <Container/>
    <Footer />
  
    </CartContextProvider>

  )
}

export default App