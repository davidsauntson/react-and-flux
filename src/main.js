$ = jQuery = require('jquery');
var React = require('react');
var Home = require('./components/homePage');
var About = require('./components/About/aboutPage');
var Header = require('./components/common/header');

var App = React.createClass({
    render: function() {
        var Child;

        console.log(this.props.route);
        switch(this.props.route) {
            case 'about':
                Child = About;
                break;
            default:
                Child = Home;
        };

        return (
            <div>
                <Header/>
                <Child/>
            </div>
        );
    }
});

render = function() {
    var route = window.location.hash.substr(1);
    React.render(<App route={route} />, document.getElementById('app'));
}


window.addEventListener('hashchange', render);
render();

