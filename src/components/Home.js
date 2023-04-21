import React from "react"
import "../styles/home.css"
import { Link} from "react-router-dom";
import { Logo } from './Logo';

function Home(){
  
    return (
            <div className="homepage">
                 <header>
                
        <h1>Welcome to the Employee Insurance Portal </h1>
        <div>

        </div>
        <div>

        </div>
         <div>
         <Logo className =" logoFig"/>

             </div>
             <div>
                
             </div>
                  </header>
                   <div>
                  <div> 
                <div >
                <div class="flex-parent jc-center">

                <Link to = '/Login'style={{ textDecoration: 'none' }}><button type="login" class="employee">Login</button></Link>
                
                         </div>
                </div>
             </div> 
         </div>
         </div> 
        )
    }
export default Home 
