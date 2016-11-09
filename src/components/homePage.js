"use strict";

var React = require('react');

var Home = React.createClass({
    render: function() {
        return (
            <div className="jumbotron">
                <h1>Pluralsight Admin</h1>
                <p>Using react, redux and flux for fairly responsive web apps</p>
            </div>
        );
    }
});

module.exports = Home;