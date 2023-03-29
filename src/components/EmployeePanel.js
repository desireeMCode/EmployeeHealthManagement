import React from "react"
import "../styles/employeePanel.css"
import {Form} from "./Form.js"

export class EmployeePanel extends React.Component
{
    render()
    {
        return(
            <div className="container">
                <h1 className="title" > Employee Panel </h1>
                <Form/>
            </div>
            
        )
    }
}