import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import  Header  from "./components/Header"
import  Footer  from "./components/Footer"
import RegistrationForm from "./components/RegistrationForm"


function App() {
  return (
    <>
    <Router>
      <header><Header  /></header>
      
        <main>

        <Switch>
                <Route path="/RegistrationForm" >
                  <RegistrationForm  /> 
                </Route>
        
        </Switch>  
        </main>
      
      <Footer /> 
      </Router>
      </>

  );
}

export default App;
