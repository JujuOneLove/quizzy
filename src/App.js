import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Personnes from "./pages/Personnes";
import Quotations from "./pages/Quotations";

function App() {
  return (
      <BrowserRouter>
        <div>
          <header>
            <Navbar/>
          </header>
          <Switch>
            <Route exact={true} path='/' component={Home}/>
            <Route exact={true} path='/home' component={Home}/>
            <Route exact={true} path='/persons' component={Personnes}/>
            <Route exact={true} path='/quotes' component={Quotations}/>
            <Route path="*" component={Error} />
          </Switch>
          <footer>
            <span>© 2015 IUT de Lens - Rue de l’université -SP 16 - 62307 LENS Cedex - FRANCE - Tel : +33 (0)3 21 79 32 32</span>
          </footer>
        </div>
      </BrowserRouter>
  );
}

export default App;
