/* eslint-disable no-useless-escape */
const regexMail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
const regexPassword = /\d/


const validation = (userData) => {
    const errors = {}
    if (!userData.email) errors.email = "Email is required"
    else if (!regexMail.test(userData.email)) errors.email = 'Invalid email'
    else if (!userData.password) errors.password = "Password is required"
    else if (!regexPassword.test(userData.password)) errors.password = 'Invalid password'
    return errors
}

export default validation