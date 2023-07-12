import { useParams } from "react-router-dom"
import { useState } from "react"
import axios from "axios"

export default function Detail() {

    const id = useParams()

    return (
        <h1>Im the character</h1>
    )
}