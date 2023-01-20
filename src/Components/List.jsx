import React, { useEffect } from "react"
import data from "../assets/MOCK_DATA.json"
import Customer from "./Customer"
import {nanoid} from "nanoid"

export default function List(){

    const defaultData = {
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        bday: ""
    }

    const [formData, setFormData] = React.useState(defaultData)

    function handleChange(event) {
        const {name, value} = event.target
        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: value
        }))
    }

    function nCustomers(n){
        let customerList = []
        for(let i = 0; i < n; i++){
            customerList.push(data[i])
        }
        return customerList
    }

    const [customers, setCustomers] = React.useState(JSON.parse(localStorage.getItem("customers")) || [])

    function sortByFirst(){
        const newArray = customers.sort((a, b) => a.first_name.localeCompare(b.first_name))
        setCustomers([...newArray])
    }

    function sortByLast(){
        const newArray = customers.sort((a, b) => a.last_name.localeCompare(b.last_name))
        setCustomers([...newArray])
    }

    function deleteCustomer(id){
        let oldLocal = JSON.parse(localStorage.getItem("customers")) || []
        let newLocal = JSON.stringify(oldLocal.filter(person => person.id != id))
        localStorage.setItem("customers", newLocal)
        setCustomers(oldArray => { 
            let newArray = oldArray.filter(person => person.id !== id)
            return [...newArray]
        })
    }

    // TODO: Nano id created here

    function addCustomer(firstName, lastName, phone, email, bday){
        if(typeof(firstName) !== 'string') return
        if(typeof (lastName) !== 'string') return


        let customer = {
            first_name: firstName,
            last_name: lastName,
            phone: phone,
            email: email,
            bday: bday,
            id: nanoid()
        }

        if(firstName, lastName){
            let oldLocal = JSON.parse(localStorage.getItem("customers")) || []
            let newLocal = JSON.stringify([...oldLocal, customer])
            localStorage.setItem("customers", newLocal)
            setCustomers(prevArray =>{
                return [...prevArray, customer]
            })
        }
    }

    console.log(localStorage)

    const [addButtonPressed, setAddButtonPressed] = React.useState(false)

    function switchAddButton(){
        setAddButtonPressed(prevState => !prevState)
    }

    function handleSubmit(event) {
        event.preventDefault()
        addCustomer(
            formData.firstName,
            formData.lastName,
            formData.phone,
            formData.email,
            formData.bday
        )
        setFormData(defaultData)
        switchAddButton()
    }
    
    React.useEffect(()=>{
        localStorage.setItem("customers", JSON.stringify(data))
        setCustomers(prevArray => {
            return [...prevArray, ...data]
        })
    },[])

    // The nano ID should be given when creating a new customer
    
    const listItems = customers.map((customer, index) => {
        return(
            <Customer 
            first_name={customer.first_name}
            last_name={customer.last_name}
            email={customer.email}
            bday={customer.bday}
            phone={customer.phone}
            key={customer.id}
            id={customer.id}
            delete={() => deleteCustomer(customer.id)}
            />
        )
    })

    return(
        <div className="list--container">
            <div className="list--titles">
                <p className="list--firstName" onClick={sortByFirst}>Name</p>
                <p className="list--lastName" onClick={sortByLast}>Nachname</p>
                <p>Telefon</p>
                <p>Email</p>
                <p>Geburtstag</p>
                <button className="list--newCustomerButton" onClick={switchAddButton}>+</button>
            </div>

            { addButtonPressed && 
                <div className="newCustomer--container">
                    <h2 className="newCustomer--title">Neuer Kunde</h2>
                    <form className ="newCustomer--form "onSubmit={handleSubmit}>
                        <div className="newCustomer--formItem">
                            <label className="newCustomer--formLabel" htmlFor="firstName">Vorname</label>
                            <input 
                                type="text" 
                                placeholder=""
                                className="newCustomer--formInput"
                                name="firstName"
                                onChange={handleChange}
                                value={formData.firstName}
                            />
                        </div>

                        <div className="newCustomer--formItem">
                            <label className="newCustomer--formLabel" htmlFor="lastName">Nachname</label>
                            <input 
                                type="text" 
                                placeholder=""
                                className="newCustomer--formInput"
                                name="lastName"
                                onChange={handleChange}
                                value={formData.lastName}
                            />
                        </div>

                        <div className="newCustomer--formItem">
                            <label className="newCustomer--formLabel" htmlFor="phone">Telefon</label>
                            <input 
                                type="text" 
                                placeholder=""
                                className="newCustomer--formInput"
                                name="phone"
                                onChange={handleChange}
                                value={formData.phone}
                            />
                        </div>
                         
                        <div className="newCustomer--formItem">
                            <label className="newCustomer--formLabel" htmlFor="email">Email</label>
                            <input 
                                type="text" 
                                placeholder=""
                                className="newCustomer--formInput"
                                name="email"
                                onChange={handleChange}
                                value={formData.email}
                            />
                        </div>

                        <div className="newCustomer--formItem">
                            <label className="newCustomer--formLabel" htmlFor="bday">Geburtstag</label>
                            <input 
                                type="text" 
                                placeholder=""
                                className="newCustomer--formInput"
                                name="bday"
                                onChange={handleChange}
                                value={formData.bday}
                            />
                        </div>

                        <button type="submit" className="newCustomer--submit">
                        Hinzufügen </button>

                    </form>
                </div>
            }

             <div className="list--customers">
                {listItems}
            </div>

        </div>
    )
}