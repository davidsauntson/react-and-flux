"use strict";

var React = require('react');
var Link = require('react-router').Link;

var Home = React.createClass({
    render: function() {
        return (
            <div className="jumbotron">
                <h1>Pluralsight Admin</h1>
                <p>Using react, redux and flux for fairly responsive web apps</p>
                <Link to="about" className="btn btn-primary btn-lg">Learn more</Link>
            </div>
        );
    }
});

module.exports = Home;