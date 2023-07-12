import style from './SearchBar.module.css'
import { useState } from 'react';
import { NavLink } from 'react-router-dom'

export default function SearchBar({ onSearch }) {

   const [id, setId] = useState('')

   function handleChange(event) {
      setId(event.target.value)
   }

   function handleButtonClick() {
      onSearch(id);
      setId('');
   }

   return (
      <div className='container'>
         <div className={style.navFlex}>
            <ul className={style.menu}>
               <NavLink
                  to='/home'
                  className={({ isActive }) => isActive ? style.activeTab
                     : style.unactiveTab}>
                  <li>HOME</li>
               </NavLink>
               <NavLink
                  to='/about'
                  className={({ isActive }) => isActive ? style.activeTab
                     : style.unactiveTab}>
                  <li>ABOUT</li>
               </NavLink>
            </ul>
            <div className={style.searchBar}>
               <input
                  type='text'
                  autoFocus
                  placeholder=' ID:'
                  value={id}
                  onChange={handleChange} />
               <button onClick={handleButtonClick}>Add</button>
            </div>
         </div>
      </div>
   );
}
