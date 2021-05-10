import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from "./components/Header";
//import Footer from "./components/Footer";
import RegistrationForm from "./components/RegistrationForm";
//import Button from "./components/Button";
import Participant from "./components/Participant";
import Footer from "./components/Footer";
import Summary from "./components/Summary";

function App() {
  return (
    <>
      <Router>
        <header>
          <Header />
        </header>

        <main>
          <Switch>
            <Route path="/registrationform">
              <RegistrationForm />
            </Route>
            <Route path="/participant-info">
              <Participant />
            </Route>
            <Route path="/summary">
              <Summary />
            </Route>
          </Switch>
        </main>
        <Footer />
      </Router>
    </>
  );
}

export default App;
