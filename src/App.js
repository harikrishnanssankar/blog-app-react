import './App.css';
import Home from './components/home/Home';
import Navbar from './components/navbar/Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Create from './components/newblog/Create';
import BlogDetails from './components/blogdetails/BlogDetails';
import NotFound from './components/Notfound/NotFound';



const App = () => {
  return (
    <Router>
      <div className="App">
        <div className="nav-navbar">
          <Navbar />
        </div>
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home/>
            </Route>
            <Route path="/create">
              <Create/>
            </Route>
            <Route path="/blogs/:id">
              <BlogDetails/>
            </Route>
            <Route path="*">
              <NotFound/>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
