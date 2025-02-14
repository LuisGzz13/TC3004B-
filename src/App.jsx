import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Button from './components/Button';
import Item from './components/Item';
import List from './components/List';
import Add from './components/Add';

function App() {
  const [items, setItems] = useState([
    { id: 1, name: "Item 1" },
    { id: 2, name: "Item 2" },
    { id: 3, name: "Item 3" }
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

  }
  return (
    <div> 
      <Header />
      {count}
      <Button name={"Suma"} click={sum} />
      <Button name={"Resta"} click={resta} />
      <Button name={"Mensaje"} click={() => alert("Hola")} />
    
      {/* Pass the add function as a prop */}
      <Add add={add} />
      <List items ={items}
      ondelete = {ondelete}
      />
      <Footer />
    </div>
  );
}

export default App;
