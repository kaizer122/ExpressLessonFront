import { ChakraProvider } from "@chakra-ui/react"
import React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Header from "./components/Header"
import CartContextProvider from "./contexts/CartContext"
import Cart from "./pages/Cart"
import ProductDetail from "./pages/ProductDetail"
import Products from "./pages/Products"
import "./styles.css"
export default function App() {
  return (
    <ChakraProvider>
      <CartContextProvider>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/">
              <Products />
            </Route>
            <Route exact path="/bootcamps/:id">
              <ProductDetail />
            </Route>
            <Route exact path="/cart">
              <Cart />
            </Route>
          </Switch>
        </Router>
      </CartContextProvider>
    </ChakraProvider>
  )
}
