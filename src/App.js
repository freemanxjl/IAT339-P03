import { Suspense, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { HashRouter as Router, useLocation } from 'react-router-dom';
import { Container } from 'react-bootstrap';

// import logo from './logo.svg';
import Routes from './special/Routes';
import MainNavbar from './components/MainNavbar';

import 'bootstrap/dist/css/bootstrap.min.css';
import './css/index.scss';
import ScrollToTop from './special/Hook';

function App() {
  return (
    <div id="container">
      <Helmet>
        <title>Freeman Liu</title>
      </Helmet>
      <Router>
        <ScrollToTop/>
        <MainNavbar/>
        <Container>
          <div id="main-content"><Suspense fallback={<div></div>}><Routes/></Suspense></div>
        </Container>
      </Router>
    </div>
  );
}

export default App;
