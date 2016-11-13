"use strict";

var React = require('react');

var About = React.createClass({
    statics: {
        willTransitionTo: function(transition, params, query, callback) {
            // if (!confirm('Are you sure you want to go to this page?')) {
            //     transition.abort();
            // }
            // else {
            //     callback();
            // }
        },
        willTransitionFrom: function(transition, component) {
            // if (!confirm('Are you sure you want to leave this page?')) {
            //     transition.abort();
            // }
        }
    },

    render: function() {
        return (
            <div>
                <h1>About</h1>
                <p>
                    This application uses the following technologies:
                    <ul>
                        <li>one</li>
                        <li>two</li>
                        <li>three</li>
                    </ul>
                </p>
            </div>
        );
    }
})

module.exports = About;