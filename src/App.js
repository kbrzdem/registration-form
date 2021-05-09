import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from "./components/Header";
//import Footer from "./components/Footer";
import RegistrationForm from "./components/RegistrationForm";
import Button from "./components/Button";

function App() {
  return (
    <>
      <Router>
        <header>
          <Header />
        </header>

        <main>
          <Switch>
            <Route path="/registrationForm">
              <RegistrationForm />
            </Route>
          </Switch>
        </main>
        <Button />
      </Router>
    </>
  );
}

export default App;
