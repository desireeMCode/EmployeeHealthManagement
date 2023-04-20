import React from "react"
import "../styles/employeePanel.css"
import Form from "./Form"
import { Logo } from './Logo';

export class Admin extends React.Component
{
    render()
    {
        return(
            <div className="container">
                <Logo className =" logoFig"/>
                <h2 className="title" > Admin Panel </h2>
                {<Form/>}
            </div>
        )
    }
}