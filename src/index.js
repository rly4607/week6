// DO NOT MODIFY

// So we can use React
var React = require('react')
var ReactDOM = require('react-dom')

// Helper functions
// .shuffle() shuffles (randomizes the order of) an array
// e.g. [1,2,3,4,5].shuffle()
// getDeck() gives us an array of cards, represented as strings
// Hint: JavaScript's built-in .splice() function will remove elements from an
// array to create a new array. For example, a "hand" from a deck of cards might
// go something like this:
//
// deck.splice(0,5)
var helpers = require('./components/Helpers')
var getDeck = helpers.getDeck
Array.prototype.shuffle = helpers.shuffle

// Our component classes
var Card = require('./components/Card')

var StartArray = ["face_down","face_down","face_down","face_down","face_down"]

// END OF STUFF TO NOT MODIFY

var App = React.createClass({
  dealClicked: function() {
    var newDeck = getDeck().shuffle().splice(0,5)
    console.log(newDeck)
    this.setState({
      cards: newDeck
    })
  },
  dealReset: function() {
    console.clear()
    this.setState({
      cards: StartArray
    })
  },
  dealCheat: function() {
    var CheatCode = getDeck().splice(32,20).shuffle()
    this.setState({
      cards: CheatCode
    })
  },
  getInitialState: function() {
    return {
      cards: StartArray
    }
  },
  render: function() {
    return (
      <div>
        <h1>Welcome to the KIEI-924 React Casino!</h1>
        <div className="row">
          <Card deck={this.state.cards} cardNum="0"/>
          <Card deck={this.state.cards} cardNum="1"/>
          <Card deck={this.state.cards} cardNum="2"/>
          <Card deck={this.state.cards} cardNum="3"/>
          <Card deck={this.state.cards} cardNum="4"/>

          <div className="col-sm-2">
            <h1><a onClick={this.dealClicked} href="#" className="btn btn-success">Deal</a></h1>
            <p><a onClick={this.dealReset} href="#" className="btn btn-danger">Reset</a></p>
            <p><a onClick={this.dealCheat} href="#" className="btn btn-primary">Cheat Code</a></p>
          </div>
        </div>
      </div>
    )
  }
})

ReactDOM.render(<App />, document.getElementById("app"))
