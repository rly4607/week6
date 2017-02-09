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
    var newDeck = getDeck().shuffle()
    var card_one = newDeck[0]
    var card_two = newDeck[1]
    this.setState({
      card0: card_one,
      card1: card_two,
      card2: newDeck,
      card3: newDeck,
      card4: newDeck
    })
  },
  getInitialState: function() {
    return {
      card0: StartArray,
      card1: StartArray,
      card2: StartArray,
      card3: StartArray,
      card4: StartArray
    }
  },
  render: function() {
    return (
      <div>
        <h1>Welcome to the KIEI-924 Casino!</h1>
        <div className="row">
          <Card deck={this.state.card0}/>
          <Card deck={this.state.card1}/>
          <Card deck={this.state.card2}/>
          <Card deck={this.state.card3}/>
          <Card deck={this.state.card4}/>

          <div className="col-sm-2">
            <h1><a onClick={this.dealClicked} href="#" className="btn btn-success">Deal</a></h1>
          </div>
        </div>
      </div>
    )
  }
})

ReactDOM.render(<App />, document.getElementById("app"))
