import style from './Card.module.css'
import { Link } from 'react-router-dom';

export default function Card({ id, name, status, species, gender, origin, image, onClose }) {
   return (
      <div className={style.cardDiv}>
         <button className={style.cardBtn} onClick={() => onClose(id)}>X</button>
         <img src={image} alt='' />
         <div className={style.name}>
            <p>{name}</p>
            <Link to={`/detail/${id}`}>
               <button>Details +</button>
            </Link>
         </div>
      </div>
   );
}
