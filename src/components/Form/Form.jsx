import { useState } from "react"
import validation from "./validation"
import style from "./Form.module.css"

export default function Form({ login }) {

    const [userData, SetUserData] = useState({
        email: '',
        password: ''
    })

    const [errors, setErrors] = useState({})

    const handleChange = (event) => {
        let property = event.target.name
        let value = event.target.value
        setErrors(validation({ ...userData, [property]: value }))
        SetUserData({ ...userData, [property]: value })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        login(userData)
    }

    return (
        <div className="container">
            <form className={style.form} onSubmit={handleSubmit} autoComplete="off">
                <div className={style.description}>
                    <p>Input any email and password to start.</p>
                </div>
                <label htmlFor="email">Email:</label>
                <input className={style.input} placeholder="Example@gmail.com" type="text" name="email" onChange={handleChange} value={userData.email} />
                {errors.email && (<p>{errors.email}</p>)}
                <label htmlFor="password">Password:</label>
                <input className={style.input} placeholder="*******" type="password" name="password" onChange={handleChange} value={userData.password} />
                {errors.password && (<p>{errors.password}</p>)}
                <button className={style.submit}>SUBMIT</button>
            </form>
        </div>
    )
}