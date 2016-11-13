"use strict";

var React = require('react');
var AuthorApi = require('../../api/authorApi');
var AuthorList = require('./authorList');
var Link = require('react-router').Link;

var AuthorPage = React.createClass({

    getIntialState: function() {
        return {
            authors: []
        }
    },

    componentWillMount: function() {
        this.setState({authors: AuthorApi.getAllAuthors()});  
    },

    
    render: function() {
        return (
            <div>
                <h1>Authors</h1>
                <AuthorList authors={this.state.authors} />
                <Link to="manage" className="btn btn-primary">Manage Authors</Link>
            </div>
        );
    }
})

module.exports = AuthorPage;