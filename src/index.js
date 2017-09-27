/*var React = require('react');
var ReactDOM = require('react-dom');
var createClass = require('create-react-class');
var shows = require('./shows');
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
);*/

/*Function Constructor*/
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
}
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
console.log(sammy);

//var sammy = new EmployeeES6('Sammy','Winchester');
//console.log(sam.getDescription());
//console.log(sammy);
//console.log(sammy.getFullName());