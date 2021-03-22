import React, {lazy} from 'react';
import {Route, Switch} from 'react-router-dom';

const Home = lazy(() => import('../pages/Home'));
const Portfolio = lazy(() => import('../pages/Portfolio'));
const ProjectOne = lazy(() => import('../pages/ProjectOne'));
const ProjectTwo = lazy(() => import('../pages/ProjectTwo'));
const StyleGuide = lazy(() => import('../pages/StyleGuide'));
const NotFound = lazy(() => import('../pages/NotFound'));

function Routes(){
    return(
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/portfolio" component={Portfolio}/>
            <Route path="/portfolio/grandis-library" component={ProjectOne}/>
            <Route path="/portfolio/project-two" component={ProjectTwo}/>
            <Route path="/style-guide" component={StyleGuide}/>
            <Route component={NotFound}/>
        </Switch>
    )
};

export default Routes;