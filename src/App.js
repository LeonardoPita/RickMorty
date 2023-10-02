import './App.css';
import Nav from './components/Nav/Nav.jsx';
import Cards from './components/Cards/Cards.jsx';
import { useState } from 'react';
import axios from 'axios';
import { Route, Routes, useLocation } from 'react-router-dom';
import About from './components/About/About';
import Detail from './components/Detail/Detail.jsx';
import Error from './components/Error/Error';
// import Form from './components/Form/Form';


function App() {

   // const navigate = useNavigate()
   // const [access, setAccess] = useState(true)
   const [chars, setChars] = useState([]);
   const { pathname } = useLocation();


   // function login(userData) {
   //    if (userData.password && userData.email) {
   //       setAccess(true)
   //       navigate('/home')
   //    }
   //    else {
   //       alert('Incorrect mail or password')
   //    }
   // }
   // useEffect(() => {
   //    !access && navigate('/');
   // }, [access, navigate]);

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
            alert('Wrong id, the id must be a number between 1 and 826.');
         });
   }

   function onClose(id) {
      const updateChars = chars.filter(char => char.id !== Number(id))
      setChars(updateChars)
   }

   function addRandomCharacter() {
      const randomId = Math.floor(Math.random() * 826) + 1;
      axios(`https://rickandmortyapi.com/api/character/${randomId}`)
         .then(({ data }) => {
            if (data.name) {
               const characterExists = chars.some((char) => char.id === data.id);
               if (characterExists) {
                  alert('This character is already added.');
               } else {
                  setChars((oldChars) => [data, ...oldChars]);
               }
            }
         })
         .catch((error) => {
            alert(error.response.data.error);
         });
   }


   return (
      <div className='App'>
         {pathname === '/RickMorty' && <Nav onSearch={onSearch} addRandomCharacter={addRandomCharacter} />}
         <Routes>
            {/* <Route
               path='/'
               element={<Form login={login} />}
            /> */}
            <Route
               path='/RickMorty'
               element={<Cards chars={chars} onClose={onClose} />}
            />
            <Route
               path='/about'
               element={<About />}
            />
            <Route
               path='/detail/:id'
               element={<Detail chars={chars} />}
            />
            <Route
               path='*'
               element={<Error />}
            />
         </Routes>
      </div>
   );
}

export default App;