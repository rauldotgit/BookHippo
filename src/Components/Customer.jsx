import React from "react"

export default function Customer(props){

    const mailLink =`https://mail.google.com/mail/?view=cm&fs=1&to=${props.email}`
    return(
        <div className="customer--item">
            <p className="firstName">{props.first_name}</p>
            <p className="lastName" >{props.last_name}</p>
            <p className="phone">{props.phone}</p>
            <a target="_blank" href={mailLink} className="email">{props.email}</a>
            <p className="bday">{props.bday}</p>
            <button className="customer--deleteButton" onClick={props.delete}>x</button>
        </div>
    )
}