import { Suspense } from 'react';
import { Helmet } from 'react-helmet';
import { HashRouter as Router } from 'react-router-dom';
import { Container } from 'react-bootstrap';

import Routes from './special/Routes';
import MainNavbar from './components/MainNavbar';
import ScrollToTop from './special/Hook';
import Footer from './components/Footer';

import 'bootstrap/dist/css/bootstrap.min.css';
import './css/index.scss';

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
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
