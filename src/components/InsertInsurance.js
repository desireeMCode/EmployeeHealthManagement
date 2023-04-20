import React from "react"
import "../styles/employeePanel.css"
import AddInsurance from "./Add_Insurance";
import { Logo } from './Logo';

export class InsertInsurance extends React.Component
{
    render()
    {
        return(
            <div className="container">
                <Logo className =" logoFig"/>
                <h2 className="title" > Add Insurance </h2>
                <AddInsurance/>
            </div>
        )
    }
}