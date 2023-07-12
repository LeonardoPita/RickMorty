import style from './Card.module.css'

export default function Card({ id, name, status, species, gender, origin, image, onClose }) {
   return (
      <div className={style.cardDiv}>
         <button className={style.cardBtn} onClick={() => onClose(id)}>X</button>
         <img src={image} alt='' />
         <div className={style.name}>
            <p>{name}</p>
            <button>Details +</button>
         </div>
      </div>
   );
}
