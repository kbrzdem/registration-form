import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import RegistrationForm from "./components/RegistrationForm";
import Aside from "./components/Aside";

function App() {
  return (
    <>
      <Router>
        <header>
          <Header />
        </header>

        <main>
          <aside className="aside col-12 col-md-4 col-lg-3">
            <Aside />
          </aside>
          <Switch>
            <Route path="/RegistrationForm">
              <RegistrationForm />
            </Route>
          </Switch>
        </main>

        <Footer />
      </Router>
    </>
  );
}

export default App;
