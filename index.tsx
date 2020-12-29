import React, { Component } from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from './Home';
import About from './About';
import Services from './Services';
import Hello from './Hello';
import './style.css';

interface AppProps { }
interface AppState {
  name: string;
}

class App extends Component<AppProps, AppState> {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Welcome to React'
    };
  }

  render() {
    return (
      <div>
        <Hello name={this.state.name} />
      <Router>
      <div>
        <nav className="navbar">
          <ul className="navbar-nav">
            <li>
              <Link to={"/"} className="nav-link">Home</Link>
            </li>
            <li>
              <Link to={"/about"} className="nav-link">About</Link>
            </li>
            <li>
              <Link to={"/services"} className="nav-link">Services</Link>
            </li>
          </ul>
        </nav>
       
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/services" component={Services} />
        </Switch>
      </div>
    </Router>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
