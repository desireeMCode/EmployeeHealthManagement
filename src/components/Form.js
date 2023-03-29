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
                        <input type="text" name="username" id="username" placeholder="Username" required/>
                    </fieldset>
                    <fieldset>
                        <input type="password" name="password" id="password" placeholder = "Password" required />
                    </fieldset>
                    <input type="submit" className="bttn"/>
                </form>
            </div>

        )
        
    }
        
}