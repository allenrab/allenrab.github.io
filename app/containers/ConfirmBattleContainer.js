var React = require('react');
var ConfirmBattle = require('../components/ConfirmBattle')

//This is the logic for the ConfirmBattle.js presentational component
var ConfirmBattleContainer = React.createClass ({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getInitialState: function(){
    //isLoading will determine if the battle page is done loading
    //Player info will cotain the state of the two player's information
    return {
      isLoading: true,
      playerInfo: []
    }
  },
  // componentDidMount checks to see if the render function below has finished loading the component
  // It is one of several lifecycle functions (others include getInitialState and componentWillMount)
  componentDidMount: function () {
    // Grabs the query of the two usernames (sent in by PromptContainer)
    var query = this.props.location.query;
    // Now, use these two usernames to fetch their github info from its API
  },
  render: function () {
    // Returns the presentational component
    // Includes two props from the getInitialState method
    return (
      <ConfirmBattle
        isLoading={this.state.isLoading}
        playersInfo ={this.state.playersInfo}/>
    )
  }
});

module.exports = ConfirmBattleContainer;
