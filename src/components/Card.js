var React = require('react')

var Card = React.createClass({

  render: function() {
    var cardValue= this.props.deck
    console.log(cardValue[this.props.cardNum]);
    var url="http://golearntocode.com/images/cards/" + cardValue[this.props.cardNum] + ".png";
    console.log(url)
    return (
      <div className="col-sm-2">
        <h1><img className="img-responsive" src={url} /></h1>
      </div>
    )
  }

})

module.exports = Card
