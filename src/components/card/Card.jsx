import style from './Card.module.css'

export default function Card({ id, name, status, species, gender, origin, image, onClose }) {
   return (
      <div className={style.cardDiv}>
         <button className={style.cardBtn} onClick={() => onClose(id)}>X</button>
         <div className={style.name}>{name}</div>
         <img src={image} alt='' />
         <div className={style.details}>
            <h2>{species}</h2>
            <h2>{gender}</h2>
         </div>
      </div>
   );
}
