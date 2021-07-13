import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import NavBar from './components/NavBar/NavBar';
import Home from './Pages/Home'
import Blogs from './Pages/Blogs/Blogs'
import Footer from './components/Footer/Footer';
import BlogDetail from './Pages/BlogDetail/BlogDetail';
import Form from './Pages/Form/Form';

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path='/' exact>
          <Home/>
        </Route>
        <Route path='/blogs' exact>
          <Blogs />
        </Route>
        <Route path='/blogs/:id'>
          <BlogDetail />
        </Route>
        <Route path='/form'>
          <Form />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
