import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import NavBar from './components/NavBar/NavBar';
import Home from './Pages/Home'
import Blog from './Pages/Blog/Blog'

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path='/' exact>
          <Home/>
        </Route>
        <Route path='/blog'>
          <Blog/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
