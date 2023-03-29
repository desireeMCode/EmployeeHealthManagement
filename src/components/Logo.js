import React from "react"
import "../styles/logo.css"

export class Logo extends React.Component
{
    render()
    {
        return(
            <div class = "logo">
                <div class = "ring"></div>
                <div class = "ring"></div>
                <div class = "ring"></div>
                <h2 class="logoName">EmpHealth</h2>
            </div>
        )

    }
    
}