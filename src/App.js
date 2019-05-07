import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer"
import Home from "./pages/Home";
import Personnes from "./pages/Personnes";
import Quotations from "./pages/Quotations";
import Error from "./pages/Error";
import Quiz from "./pages/Quiz";

function App() {
  return (
      <BrowserRouter>
        <div>
          <header className="header">
            <Navbar/>
          </header>
          <main role="main">
            <Switch>
              <Route exact={true} path='/' component={Home}/>
              <Route exact={true} path="/jouer/:quiz" component={Quiz}/>

              <Route exact={true} path='/persons' component={Personnes}/>
              <Route exact={true} path='/quotes' component={Quotations}/>
              <Route path="*" component={Error} />
            </Switch>
          </main>
          <Footer/>
        </div>
      </BrowserRouter>
  );
}

export default App;
