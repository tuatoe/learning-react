var React = require('react'),
    createClass = require('create-react-class');

//title
var Title = createClass({
    render: function(){
        return (
            <h3>Title: {this.props.showTitle} </h3>
        );
    }
});

//graphic
var Poster = createClass({
    render: function(){
        return (
            <img src={this.props.showPoster} alt="Show Poster" style={{height:400, width:400}} />
        );
    }
});

//plot
var ShowInfo = createClass({
    render: function(){
        return (
           <div>
             <p>Plot: {this.props.showPlot}</p>
            <h5>IMDB Rating: {this.props.showRating}</h5>
           </div>
        );
    }
});

//show
var Show = createClass({
    getDefaultProps: function(){
        return {
            showIndex: 0
        };  
    },
    getInitialState: function(){
        return {
            showIndex: this.props.showIndex
        };
    },
    handleBtnClick: function(){
        var totalShows = this.props.shows.length;
        
        this.setState(function(prevState){
            return {
                showIndex: (prevState.showIndex + 1) % totalShows
            };
        });
    },
    render: function(){
         var show = this.props.shows[this.state.showIndex];
        return (
           <div className="text-center">
             <Title showTitle={show.title} />
            <Poster showPoster={show.poster} />
            <ShowInfo showPlot={show.plot} showRating={show.imdRating}/>
            <button onClick={this.handleBtnClick}>Next Show</button>
           </div>
        );
    }
});

