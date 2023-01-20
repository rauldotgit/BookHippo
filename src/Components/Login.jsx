import React from "react"
import Hippo from "../assets/hippo-solid.svg"

export default function Login(props){

    const [formData, setFormData] = React.useState({
        password: ""
    })
    
    function handleSubmit(event) {
        event.preventDefault()
        if(formData.password === "cacamaca2506"){
            setFormData({password: ""})
            props.lock()
        } else console.log("wrong password")
    }

    function handleChange(event) {
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

            <form className="login--form" onSubmit={handleSubmit}>

                <h1 className="login--title">Sers Mamuca!</h1>
                
                <input 
                    type="password" 
                    placeholder="Password"
                    className="login--input"
                    name="password"
                    onChange={handleChange}
                    value={formData.password}
                />
                
                <button className="login--submit">
                    Login
                </button>
            </form>
        </div>
    )
}