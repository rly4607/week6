var React = require('react')

var Card = React.createClass({

  render: function() {
    var cardValue= this.props.deck
    console.log(cardValue[0]);
    var url="http://golearntocode.com/images/cards/" + cardValue[0] + ".png";
    console.log(url)
    return (
      <div className="col-sm-2">
        <h1><img className="img-responsive" src={url} /></h1>
      </div>
    )
  }

})

module.exports = Card
