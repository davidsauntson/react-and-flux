var React = require('react');
var TextInput = require('../common/textInput');

var AuthorForm = React.createClass({
    render: function() {
        return (
            <form>
                <h1>Author Form</h1>
                <TextInput 
                    name="firstName" 
                    label="First name"
                    value={this.props.author.firstName}
                    onChange={this.props.onChange} />
                <TextInput 
                    name="lastName" 
                    label="Last name"
                    value={this.props.author.lastName}
                    onChange={this.props.onChange} />

                <input type="submit" value="Save" className="btn btn-primary" />
            </form>
        );
    }
})

module.exports = AuthorForm;