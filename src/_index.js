var React = require('react');
var ReactDOM = require('react-dom');
var createClass = require('create-react-class');
//<h1>Hello World</h1>
//In react, if we want to do the samething, we first need to create a react element //of type h1 with content, 'Hello World'
//which will eventually spit out our heading onto the webpage

//JSX will replace React.createElement to avoid writing too much code
//JavaScript syntax extension or JSX
//React.createElement(type, attrs/props, child1,child2,child3)
//React.createElement(type, attrs/props, ...children)
//var App = React.createElement('h1', null, 'Hello World');
//var App = <h1>Hello World</h1>;
//In order for a react compoent to be a component it has to return a JSX code

//class component vs function component

//function component
//var Component = function(props){
    //return (
        //will get transpile to an html element
       //<div style={{color:props.color}}> 
        //<h1>{props.greeting}</h1>
        
        //<h2> {props.greeting}</h2>
        //</div>
        
    //);
//};

//Class component
var Component = createClass({
    getInitialState: function(){
        return {
            color: 'blue'
        };
    },
    handleButtonClick: function(){
        this.setState(function(prevState){
            return {
                color:(prevState.color === 'blue') ? 'green' : 'blue'
            };
        });
    },
    render: function(){
        return (
       <div>
           <div style={{color:this.state.color}}> 
                <h1>{this.props.greeting}</h1>
            </div>
            <button onClick={this.handleButtonClick}>Click Me</button>
        </div>
        );
    }
});



//we need to somehow tell react to take our react 
//element app and display it on the  webpage using DOM
//ReactDOM.render([what], [where]);
//What we want to render in the dom
//Where on the DOM tree do we want it rendered?
//ReactDOM.render(
    //App, 
    //document.getElementById('root')
//);

//ReactDOM.render(
    //React.createElement(Component), document.getElementById('root')
//);
//ReactDOM.render(
    //<div><Component greeting="Hello World" color="blue" />
    //<Component greeting="Hey there" color="green" /> </div>, //document.getElementById('root')
//);

ReactDOM.render(
    <Component greeting="Hello World"/>, 
    document.getElementById('root')
);