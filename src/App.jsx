import React from "react"
import Navbar from "./Components/Navbar"
import List from "./Components/List"
import Login from "./Components/Login"

export default function App(){

    const [login, setLogin] = React.useState(true)

    function switchLogin(){
        setLogin(prevState => !prevState)
    }

    return (
        <div>
            { login ? 
                <div className="loginPage--container">
                    <Login lock={switchLogin}/>
                </div>

                :

                <div className="mainPage--container">
                    <Navbar lock={switchLogin}/>
                    <List />
                </div>
            }
        </div>
    )
}

