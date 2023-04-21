import React from "react"
import "../styles/home.css"
import { Link} from "react-router-dom";
import { Logo } from './Logo';

function Home(){
  
    return (
            <div className="homepage">
                <Logo className =" logoFig"/>
                <h2 className="title">Welcome to the Employee Insurance Portal </h2>
                <h3>Please select a User Type</h3>
                
                <div class="flex-parent jc-center">
                    <Link to = '/Employee'  style={{ textDecoration: 'none' }}>
                        <button type="employee" class="employee">Employee Login</button>
                    </Link>
                    <Link to = '/Login' style={{ textDecoration: 'none' }}>
                        <button type="admin" class="admin">Admin Login</button>
                    </Link>
                </div>
            </div> 
        )
    }
export default Home 
