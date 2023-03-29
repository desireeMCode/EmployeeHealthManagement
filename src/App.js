import './App.css';
import { EmployeePanel } from './components/EmployeePanel.js';
import { Logo } from './components/Logo';

function App() {
  //was just fooling around, you can remove the logo
  return (
    <>
     <Logo/> 
     <EmployeePanel/>
    </>
    
  );
}

export default App;
