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





/*Function Constructor
var Employee = function(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
};

Employee.prototype.getFullName = function(){
    return this.firstName + ' ' + this.lastName;
}

var Engineer = function(firstName, lastName, field){
  Employee.call(this, firstName, lastName);
    this.field = field;
};

Engineer.prototype = Object.create(Employee.prototype);
Engineer.prototype.constructor = Engineer;

Engineer.prototype.getDescription = function(){
    return this.getFullName() + ' is ' + this.field + 'Engineer';
};

Engineer.greeting = function(){
    return 'sayhi';
}
//console.log(Engineer.greeting());
//console.log(sam.greeting());
//var sam = new Engineer('Sam', 'Williams', 'Software');
//console.log(sam);
//console.log(sam.getFullName());

/* ES6 Class */

class FuckTrumpES6{
    constructor(firstName,lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }
    
    getFullName(){
        return this.firstName + ' ' + this.lastName;
    }
    
    static greeting(){
        return 'sayhi';
    }
}

//super class EmployeeES6
//sub class EngineerES6
class HateTrumpES6 extends FuckTrumpES6{
    constructor(firstName, lastName, field){
        super(firstName, lastName);
        this.field = field;
    }
  
    getDescription(){
       return this.getFullName() + ' is ' + this.field + 'Engineer';
    }
}
var sammy = new HateTrumpES6('Sammy', 'Winchester','Electronics');
console.log(sammy.greeting());


//var sammy = new EmployeeES6('Sammy','Winchester');
//console.log(sam.getDescription());
//console.log(sammy);
//console.log(sammy.getFullName());
