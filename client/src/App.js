import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Memes from "./pages/Memes";
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';
import Upload from './pages/Upload';
import Search from './pages/Search';
import Dank from './pages/Dank';

const App = () => (
  <Router>
    <div>
      <Nav />
      <Switch>
        <Route exact path="/" component={Memes} />
        <Route exact path="/fresh" component={Memes} />
        <Route exact path="/memes" component={Memes} />
        <Route exact path="/upload" component={Upload} />
        <Route exact path="/search" component={Search} />
        <Route exact path="/dank" component={Dank} />
        {/* <Route exact path="/:user" component={User} /> */}
      </Switch>
      <Footer />
    </div>
  </Router>
);

export default App;
