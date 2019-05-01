import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import './App.css';
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Movies from "./pages/Movies";
import Personnes from "./pages/Personnes";

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
            <Route exact={true} path='/about' component={About}/>
            <Route exact={true} path='/movies' component={Movies}/>
            <Route exact={true} path='/persons' component={Personnes}/>
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
