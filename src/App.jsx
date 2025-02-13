import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Button from './components/Button';
import Item from './components/Item';
import List from './components/List';

function App() {

  const item = [

    { id: 1, name: "Item 1" },
    { id: 2, name: "Item 2" },
    { id: 3, name: "Item 3" }
  ];

  const [count, setCount] = useState(0);
  const sum = () => {
    setCount(count + 1);
    console.log(count);
  };
  const resta = () => {
    setCount(count - 1);
  }
 
  const nombre = "Luis";  
  const elemento = <h1> Hola, {nombre} </h1>

  return (
    <div> 
      <Header />
      {count}
      <Button name = {"suma"} click={sum}/>
      <Button name = {"Resta"} click ={resta}/>
      <Button name = {"Mensaje"} click ={() => alert("Hola")}/>
      <div>
      <List items = {item}></List>
      </div>
      
      <Footer />
    </div>
  );
}

export default App;
