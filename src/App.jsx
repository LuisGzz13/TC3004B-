import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import { BrowserRouter, Routes, Route, useNavigate, Navigate } from "react-router-dom"; 
import Header from "./components/Header";
import Footer from "./components/Footer";
import Button from "./components/Button";
import List from "./components/List";
import Add from "./components/Add";
import SignIn from "./components/SignIn";
import { AppBar } from "@mui/material";
import ResponsiveAppBar from "./components/AppBar";

// Componente interno que usa useNavigate
function AppContent({ isAuthenticated, setIsAuthenticated, items, setItems, count, setCount }) {
  const navigate = useNavigate();

  const handleLogin = () => {
    setIsAuthenticated(true);
    navigate("/items");
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    navigate("/");
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

  return (
    <>
      {isAuthenticated && <ResponsiveAppBar onLogout={handleLogout} />}
      <Routes>
        {!isAuthenticated ? (
          <Route path="/" element={<SignIn onLogin={handleLogin} />} />
        ) : (
          <>
            <Route
              path="/items"
              element={
                <>
                  <Header />
                  <List items={items} ondelete={ondelete} />
                  <div>
                    <h2>Counter: {count}</h2>
                    <Button name={"Suma"} click={sum} />
                    <Button name={"Resta"} click={resta} />
                    <Button name={"Mensaje"} click={() => alert("Hola")} />
                  </div>
                  <Footer />
                </>
              }
            />
            <Route
              path="/add"
              element={
                <>
                  <Header />
                  <Add add={add} />
                  <Footer />
                </>
              }
            />
            <Route path="/" element={<Navigate to="/items" replace />} />
          </>
        )}
        {/* Redirigir cualquier ruta no válida al login si no está autenticado */}
        {!isAuthenticated && (
          <Route path="*" element={<Navigate to="/" replace />} />
        )}
        {/* Redirigir cualquier ruta no válida a /items si está autenticado */}
        {isAuthenticated && (
          <Route path="*" element={<Navigate to="/items" replace />} />
        )}
      </Routes>
    </>
  );
}

function App() {
  const [items, setItems] = useState([
    { id: 1, name: "Item 1" },
    { id: 2, name: "Item 2" },
    { id: 3, name: "Item 3" },
  ]);
  const [count, setCount] = useState(0);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <BrowserRouter>
      <AppContent 
        isAuthenticated={isAuthenticated}
        setIsAuthenticated={setIsAuthenticated}
        items={items}
        setItems={setItems}
        count={count}
        setCount={setCount}
      />
    </BrowserRouter>
  );
}

export default App;