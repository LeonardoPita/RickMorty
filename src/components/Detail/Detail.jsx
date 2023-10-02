import { useParams, useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"
import axios from "axios"
import style from './Detail.module.css'


export default function Detail() {
    const { id } = useParams()
    const navigate = useNavigate()
    const [chars, setChars] = useState({})


    useEffect(() => {
        axios(`https://rickandmortyapi.com/api/character/${id}`)
            .then(({ data }) => {
                if (data.name) {
                    setChars(data)
                }
            })
            .catch((error) => {
                alert(error.response.data.error);
            });
        return setChars({})
    }, [id]);

    function handleBackButtonClick() {
        navigate('/RickMorty');
    }

    return (
        <div className={style.container}>
            <div>
                <span className={style.backBtn} onClick={handleBackButtonClick}>X</span>
                <h3>{chars.name}</h3>
                <p>id: {id}</p>
                <p>Species: {chars.species}</p>
                <p>Type: {chars.type}</p>
                <p>Gender: {chars.gender}</p>
                <p>Status: {chars.status}</p>
            </div>
            <div>
                <img src={chars.image} alt="" />
            </div>
        </div>
    )
}