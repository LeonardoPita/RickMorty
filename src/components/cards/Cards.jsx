import Card from '../Card/Card.jsx';
import Detail from "../Detail/Detail.jsx";
import style from './Cards.module.css'

export default function Cards({ chars, onClose }) {
   return (
      <main className='container'>
         <div className={style.cardsHolder}>
            {chars.map(({ id, name, status, species, gender, origin, image }) => (
               <Card
                  key={id}
                  id={id}
                  name={name}
                  status={status}
                  species={species}
                  gender={gender}
                  origin={origin.name}
                  image={image}
                  onClose={onClose}
               />
            ))
            }
         </div>
      </main>
   );
}
