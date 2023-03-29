import React from "react"
import "../styles/form.css"


export class Form extends React.Component
{
    render()
    {
        return(
            <div>
                <form action="" >
                    <fieldset>
                        <input type="text" name="username" id="username" pattern="[a-z0-5]{2,}" placeholder="Username" required/>
                    </fieldset>
                    <fieldset>
                        <input type="password" name="password" id="password" placeholder = "Password" pattern="[a-z0-5]{6,}" required />
                    </fieldset>
                    <input type="submit" className="bttn"/>
                </form>
            </div>

        )
        
    }
        
}