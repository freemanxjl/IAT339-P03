import { Suspense } from 'react';
import { Helmet } from 'react-helmet';
import { HashRouter as Router } from 'react-router-dom';
import { Container } from 'react-bootstrap';

// import logo from './logo.svg';
import Routes from './special/Routes';
import MainNavbar from './components/MainNavbar';

import 'bootstrap/dist/css/bootstrap.min.css';
import './css/index.css';
import './css/interactive-elements.css';
import './css/combined-elements.css';

function App() {
  return (
    <div id="container">
      <Helmet>
        <title>Freeman Liu Portfolio</title>
        <meta content="Placeholder" name="description"/>
      </Helmet>
      <Router>
        <MainNavbar/>
        <Container>
          <div id="main-content"><Suspense fallback={<div></div>}><Routes/></Suspense></div>
        </Container>
      </Router>
    </div>
  );
}

export default App;
