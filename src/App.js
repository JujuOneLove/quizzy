import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer"
import Home from "./pages/Home";
import Personnes from "./pages/Personnes";
import Quotations from "./pages/Quotations";
import Error from "./pages/Error";
import CreerQuiz from "./pages/CreerQuiz";
import Quiz from "./pages/Quiz";
import Login from "./pages/Login"

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {connected: false};
  }

  checkConnexion(connected) {
    if (connected !== this.state.connected) this.setState({connected: connected})
  }

  render() {
    return (
        <BrowserRouter>
          <div>
            <header className="header">
              <Navbar connected={this.state.connected}/>
            </header>
            <main role="main">
              <Switch>
                <Route exact={true} path='/' component={Home}/>
                <Route exact={true} path="/jouer/:quiz" component={Quiz}/>
                <Route exact={true} path='/persons' component={Personnes}/>
                <Route exact={true} path='/quotes' component={Quotations}/>
                <Route exact={true} path="/login"
                       render={props => <Login {...props} checkConnexion={b => this.checkConnexion(b)}/>}/>
                <Route path="*" component={Error}/>
              </Switch>
            </main>
            <Footer/>
          </div>
        </BrowserRouter>
    );
  }
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
              <Route exact={true} path='/persons' component={Personnes}/>
              <Route exact={true} path='/quotes' component={Quotations}/>
              <Route exact={true} path='/creer/quiz' component={CreerQuiz}/>
              <Route path="*" component={Error} />
            </Switch>
          </main>
          <Footer/>
        </div>
      </BrowserRouter>
  );
}
export default App;
