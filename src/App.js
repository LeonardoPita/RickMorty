import './App.css';
import Nav from './components/Nav/Nav.jsx';
import Cards from './components/Cards/Cards.jsx';
import { useState } from 'react';
import axios from 'axios';
import { Route, Routes } from 'react-router-dom';
import About from './components/About/About';
import Detail from './components/Detail/Detail.jsx';


function App() {

   const [chars, setChars] = useState([]);

   function onSearch(id) {
      axios(`https://rickandmortyapi.com/api/character/${id}`)
         .then(({ data }) => {
            if (data.name) {
               const characterExists = chars.some((char) => char.id === data.id);
               if (characterExists) {
                  alert('This char is already added.');
               } else {
                  setChars((oldChars) => [data, ...oldChars]);
               }
            }
         })
         .catch((error) => {
            alert('There are no character whith this id.');
            console.error(error);
         });
   }

   function onClose(id) {
      const updateChars = chars.filter(char => char.id !== Number(id))
      setChars(updateChars)
   }

   return (
      <div className='App'>
         <Nav onSearch={onSearch} />
         <Routes>
            <Route
               path='/home'
               element={<Cards
                  chars={chars}
                  onClose={onClose} />}
            />
            <Route
               path='/about'
               element={<About />}
            />
            <Route
               path='/details/:id'
               element={<Detail />} />
         </Routes>
      </div>
   );
}

export default App;