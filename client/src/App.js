import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Memes from "./pages/Memes";
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';
import Upload from './pages/Upload';

const App = () => (
  <Router>
    <div>
      <Nav />
      <Switch>
        <Route exact path="/" component={Memes} />
        <Route exact path="/memes" component={Memes} />
        <Route exact path="/upload" component={Upload} />
      </Switch>
      <Footer />
    </div>
  </Router>
);


// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <Nav />
//         <Switch>
//           <Route exact path="/" component={Memes} />
//           <Route exact path="/memes" component={Memes} />
//           <Route exact path="/upload" component={Upload} />
//         </Switch>
//         <Footer />
//       </div>
//     );
//   }
// }

export default App;
