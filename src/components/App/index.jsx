import { Router } from '@reach/router';

import './App.css';
import Header from '../Header';
import Main from '../Main';
import Footer from '../Footer';
import Nav from '../Nav';

function App() {
  return (
    <div className="app">
      <Header />
      <Nav />
      <Router>
        <Main path="/" />
      </Router>
      <Footer />
    </div>
  );
}

export default App;
