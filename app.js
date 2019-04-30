import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./app.scss";

function Index() {
  return <h2>Home component</h2>;
}

function About() {
  return <h2>About component</h2>;
}

function Users() {
  return <h2>Users component</h2>;
}

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="app">
          <nav>
            <ul className="app__nav-list">
              <li className="app__nav-list__item">
                <Link to="/">Home</Link>
              </li>
              <li className="app__nav-list__item">
                <Link to="/about/">About</Link>
              </li>
              <li className="app__nav-list__item">
                <Link to="/users/">Users</Link>
              </li>
            </ul>
          </nav>

          <Route path="/" exact component={Index} />
          <Route path="/about/" component={About} />
          <Route path="/users/" component={Users} />
        </div>
      </Router>
    );
  }
}

export default App;
