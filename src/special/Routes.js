import React, {lazy} from 'react';
import {Route, Switch} from 'react-router-dom';

const Home = lazy(() => import('../pages/Home'));
const Portfolio = lazy(() => import('../components/Portfolio'));
const ProjectOne = lazy(() => import('../pages/ProjectOne'));
const ProjectTwo = lazy(() => import('../pages/ProjectTwo'));
const StyleGuide = lazy(() => import('../pages/StyleGuide'));
const About = lazy(() => import('../pages/About'));
const Contact = lazy(() => import('../pages/Contact'));
const NotFound = lazy(() => import('../pages/NotFound'));

function Routes(){
    return(
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/grandis-library" component={ProjectOne}/>
            <Route path="/tamooki" component={ProjectTwo}/>
            <Route path="/about" component={About}/>
            <Route path="/contact" component={Contact}/>
            <Route path="/style-guide" component={StyleGuide}/>
            <Route component={NotFound}/>
        </Switch>
    )
};

export default Routes;