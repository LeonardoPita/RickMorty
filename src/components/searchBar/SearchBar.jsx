import style from './SearchBar.module.css'
import { useState } from 'react';
import { NavLink } from 'react-router-dom'

export default function SearchBar({ onSearch, addRandomCharacter }) {

   const [id, setId] = useState('')

   function handleChange(event) {
      setId(event.target.value)
   }

   function handleButtonClick() {
      onSearch(id);
      setId('');
   }

   function handleRandomClick() {
      addRandomCharacter();
   }

   return (
      <div className='container'>
         <div className={style.navFlex}>
            <ul className={style.menu}>
               <NavLink
                  to='/RickMorty'
                  className={({ isActive }) => isActive ? style.activeTab
                     : style.unactiveTab}>
                  <li>HOME</li>
               </NavLink>
               <NavLink
                  to='/about'
                  className={({ isActive }) => isActive ? style.activeTab
                     : style.unactiveTab}>
                  <li>INFO</li>
               </NavLink>
            </ul>
            <div className={style.searchBar}>
               <button onClick={handleRandomClick}>Add Random</button>
               <input
                  type='text'
                  autoFocus
                  placeholder=' ID between 1 and 826.'
                  value={id}
                  onChange={handleChange} />
               <button onClick={handleButtonClick}>Add</button>
            </div>
         </div>
      </div>
   );
}
