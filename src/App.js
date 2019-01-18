import React, { Component } from 'react';

import NavBar from './components/NavBar/Navbar';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import routes from './routes';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Header />
         <NavBar />
          {routes}
         <Footer />
      </div>
    );
  }
}

export default App;
