import { Suspense } from 'react';
import { Helmet } from 'react-helmet';
import { HashRouter as Router } from 'react-router-dom';

// import logo from './logo.svg';
import Routes from './special/Routes';

function App() {
  return (
    <div>
      <Helmet>
        <title>Freeman Liu Portfolio</title>
        <meta content="Placeholder" name="description"/>
      </Helmet>
      <Router>
        <Suspense fallback={<div></div>}><Routes/></Suspense>
      </Router>
    </div>
  );
}

export default App;
