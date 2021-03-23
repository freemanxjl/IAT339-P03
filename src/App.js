import { Suspense } from 'react';
import { Helmet } from 'react-helmet';
import { HashRouter as Router } from 'react-router-dom';
import { Container } from 'react-bootstrap';

// import logo from './logo.svg';
import Routes from './special/Routes';
import MainNavbar from './components/MainNavbar';

import 'bootstrap/dist/css/bootstrap.min.css';
import './css/index.css';

function App() {
  return (
    <div>
      <Helmet>
        <title>Freeman Liu Portfolio</title>
        <meta content="Placeholder" name="description"/>
      </Helmet>
      <Router>
        <MainNavbar/>
        <Container>
          <Suspense fallback={<div></div>}><Routes/></Suspense>
        </Container>
      </Router>
    </div>
  );
}

export default App;
