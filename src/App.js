import './App.css';
import Nav from './components/Nav/Nav.jsx';
import Cards from './components/cards/Cards.jsx';
import { useState } from 'react';
import axios from 'axios';


function App() {

   const [chars, setChars] = useState([]);

   function onSearch(id) {
      axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
         if (data.name) {
            setChars((oldChars) => [data, ...oldChars]);
         } else {
            alert('¡No hay personajes con este ID!');
         }
      });
   }

   function onClose(id) {
      const updateChars = chars.filter(char => char.id !== Number(id))
      setChars(updateChars)
   }

   return (
      <div className='App'>
         <Nav onSearch={onSearch} />
         <Cards
            chars={chars}
            onClose={onClose} />
      </div>
   );
}

export default App;