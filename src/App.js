// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './Home';
import DetailsPage from './DetailsPage';

function App() {
  return (
    <div className="App">
      <Router>
        <nav>
          <Link to="/">Home</Link>
        </nav>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route>
            <DetailsPage path="/animal-detail/:id"/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
