import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"; 
import Header from "./components/Header";
import Footer from "./components/Footer";
import Button from "./components/Button";
import List from "./components/List";
import Add from "./components/Add";
import { AppBar } from "@mui/material";
import ResponsiveAppBar from "./components/AppBar";

function App() {
  const [items, setItems] = useState([
    { id: 1, name: "Item 1" },
    { id: 2, name: "Item 2" },
    { id: 3, name: "Item 3" },
  ]);

  const [count, setCount] = useState(0);

  const sum = () => {
    setCount(count + 1);
    console.log(count);
  };

  const resta = () => {
    setCount(count - 1);
  };

  // Define the add function
  const add = (newItem) => {
    setItems([...items, { id: items.length + 1, ...newItem }]);
  };

  const ondelete = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  return (
    
    <BrowserRouter>
    <ResponsiveAppBar/>
      <Header />
      <Routes>
        <Route path="/add" element={<Add add={add} />} />
        <Route path="/items" element={<List items={items} ondelete={ondelete} />} /> 
      </Routes>
      
      <div>
        <h2>Counter: {count}</h2>
        <Button name={"Suma"} click={sum} />
        <Button name={"Resta"} click={resta} />
        <Button name={"Mensaje"} click={() => alert("Hola")} />
      </div>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
