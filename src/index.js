var React = require('react');
var ReactDOM = require('react-dom');
var createClass = require('create-react-class');
var shows = require('./show-data');
var Show = require('./Show');

var Shows = function(props){
    return (
        <div>
            <Show shows={props.shows} showIndex={0} />
        </div>
    );
};

ReactDOM.render(
    <Shows shows={shows} />, 
    document.getElementById('root')
);

