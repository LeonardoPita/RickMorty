import style from './SearchBar.module.css'

export default function SearchBar({ onSearch }) {
   return (
      <div className={style.navBack}>
         <div className='container'>
            <div className={style.navFlex}>
               <div className={style.buttonGroup}>
                  <button >One</button>
                  <button >Two</button>
                  <button >Tree</button>
               </div>
               <div className={style.searchBar}>
                  <input type='search' />
                  <button onClick={onSearch}>Agregar</button>
               </div>
            </div>
         </div>
      </div>
   );
}
