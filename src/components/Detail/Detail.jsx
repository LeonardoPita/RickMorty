import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import axios from "axios"

export default function Detail() {

    const { id } = useParams()

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

    return (
        <div>
            <h1>Im the character {id}</h1>
            <img src={chars.image} alt="" />
        </div>
    )
}