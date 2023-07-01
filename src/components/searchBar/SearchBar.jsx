import style from './SearchBar.module.css'
import { useState } from 'react';

export default function SearchBar({ onSearch }) {

   const [id, setId] = useState('')

   function handleChange(event) {
      setId(event.target.value)
   }

   return (
      <div className='container'>
         <div className={style.navFlex}>
            <div className={style.buttonGroup}>
               <button >One</button>
               <button >Two</button>
               <button >Tree</button>
            </div>
            <div className={style.searchBar}>
               <input
                  type='search'
                  placeholder='ID...'
                  value={id}
                  onChange={handleChange} />
               <button onClick={() => onSearch(id)}>Add</button>
            </div>
         </div>
      </div>
   );
}
