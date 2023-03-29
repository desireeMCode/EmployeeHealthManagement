import React from "react"
import "../styles/employeePanel.css"
import {Form} from "./Form.js"
import { Logo } from './Logo';

export class EmployeePanel extends React.Component
{
    render()
    {
        return(
            <div className="container">
                <Logo class =" logoFig"/>
                <h1 className="title" > Employee Panel </h1>
                <Form/>
            </div>
            
        )
    }
}