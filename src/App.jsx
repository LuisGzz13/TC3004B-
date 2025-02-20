import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"; 
import Header from "./components/Header";
import Footer from "./components/Footer";
import Button from "./components/Button";
import List from "./components/List";
import Add from "./components/Add";
import SignIn from "./components/SignIn";
import { AppBar } from "@mui/material";
import ResponsiveAppBar from "./components/AppBar";

function App() {
  const [items, setItems] = useState([
    { id: 1, name: "Item 1" },
    { id: 2, name: "Item 2" },
    { id: 3, name: "Item 3" },
  ]);
  const [count, setCount] = useState(0);
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Add authentication state

  const handleLogin = () => {
    setIsAuthenticated(true); // Update authentication status
  };

  const sum = () => {
    setCount(count + 1);
    console.log(count);
  };

  const resta = () => {
    setCount(count - 1);
  };

  const add = (newItem) => {
    setItems([...items, { id: items.length + 1, ...newItem }]);
  };

  const ondelete = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  // If not authenticated, only show the SignIn component
  if (!isAuthenticated) {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignIn onLogin={handleLogin} />} />
        </Routes>
      </BrowserRouter>
    );
  }

  // If authenticated, show the full app
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