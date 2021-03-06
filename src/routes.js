"use strict";

var React = require('react');
var Router = require('react-router');
var DefaultRoute = Router.DefaultRoute;
var Route = Router.Route;
var NotFoundRoute = Router.NotFoundRoute;
var Redirect = Router.Redirect;

var routes = (
    <Route name="app" path="/" handler={require('./components/app')}>
        <NotFoundRoute handler={require('./components/404')} />
        <DefaultRoute handler={require('./components/homePage')} />
        <Route name="about" handler={require('./components/about/aboutPage')} />
        <Route name="authors" handler={require('./components/authors/authorsPage')} />
        <Route name="manage" handler={require('./components/authors/manageAuthorsPage')} />

        <Redirect from="about-us" to="about" />
        <Redirect from="about/*" to="about" />
    </Route>
);

module.exports = routes;