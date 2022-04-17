import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import "./App.css";
import Counter from "./views/Counter";
import Home from "./views/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/nav/Nav";
import Products from "./views/Products";
import ProductDetails from "./views/ProductsDetails";
import ToDo from "./views/ToDo";
import RegisterForm from "./views/RegisterForm";

function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/todo" element={<ToDo />} />
          <Route path="/form" element={<RegisterForm />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
