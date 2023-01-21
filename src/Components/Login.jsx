import React from "react"
import Hippo from "../assets/hippo-solid.svg"

export default function Login(props){

    const [formData, setFormData] = React.useState({password: ""})

    // This is unsafe, but will be enough for local use.
    // Conditional rendering of new password:
    // localPassword == truthy -> show login
    // localPassword == false -> show new password 
    // localsPassword == -1 -> wrong password
    const [localPassword, setLocalPassword] = React.useState(
        JSON.parse(localStorage.getItem("password")) || false
        )

    const [passData, setPassData] = React.useState({
        setPassword: "",
        confirm: ""
    })

    const [passNoMatch, setPassNoMatch] = React.useState(
            () => false
        )

    const [wrongPass, setWrongPass] = React.useState(
        () => false
    )

    console.log(localPassword)

    function handlePassSubmit(event) {
        event.preventDefault()
        let passEquals = passData.setPassword === passData.confirm
        let passLength = passData.setPassword.length > 0
        if(passEquals && passLength) {
            setPassNoMatch(false)
            setLocalPassword(passData.setPassword)
            localStorage.setItem("password", JSON.stringify(passData.setPassword))
        } else {
            setPassNoMatch(true)
        }
        console.log(passData)
    }

    function handleFormSubmit(event) {
        event.preventDefault()
        const currentPass = JSON.parse(localStorage.getItem("password"))
        if(formData.password === currentPass){

            setFormData( prevFormData => ({
                ...prevFormData,
                    password: ""
                }))

            props.lock()
        } else console.log("wrong password")
    }

    function handlePassChange(event) {

        const {name, value} = event.target

        setPassData(prevPassData => ({
            ...prevPassData,
            [name]: value
        }))
    }

    function handleFormChange(event) {
        const {name, value} = event.target

        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: value
        }))  
    }

    return(
        <div className="login--container">
            <div className="login--header">

                <img className="login--hippo" id="hippo-img" src={Hippo} alt="Hippo Icon" />
                <h1>BookHippo</h1>

            </div>

            {!localPassword ?

                <form className="password--form" onSubmit={handlePassSubmit}>
                    <h2 className="password--title">Set password</h2>

                    <input 
                        type="password" 
                        placeholder="Password"
                        className="password--input"
                        name="setPassword"
                        onChange={handlePassChange}
                        value={passData.password}
                    />

                    { passNoMatch &&
                        <label htmlFor="confirm" className="password--noMatch">Passwords don't match.</label>
                    }
                    <input 
                        type="password" 
                        placeholder="Confirm"
                        className="password--input"
                        name="confirm"
                        onChange={handlePassChange}
                        value={passData.confirm}
                    />

                    <button className="password--submit">
                        Login
                    </button>
                </form>

                :
                <form className="login--form" onSubmit={handleFormSubmit}>

                    <h1 className="login--title">Hey there!</h1>
                    
                    { wrongPass &&
                        <label htmlFor="password" className="login--wrongPass">Wrong password.</label>
                    }
                    <input 
                        type="password" 
                        placeholder="Password"
                        className="login--input"
                        name="password"
                        onChange={handleFormChange}
                        value={formData.password}
                    />
                
                    <button className="login--submit">
                        Login
                    </button>
                </form>
            }
        </div>
    )
}