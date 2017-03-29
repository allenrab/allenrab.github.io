var React = require('react');
var Prompt = require('../components/Prompt')

var PromptContainer = React.createClass({
  //You declare this so you can use context later in the code to switch between routers and pass info
  //Not sure why you can't use Link
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  //In getInitialState, you usually pass in empty parameters that hold the state
  getInitialState: function(){
    return {
        username:''
    }
  },
  //This is a custom function we came up with
  handleUpdateUser: function(e){
      this.setState({
        username: e.target.value
      })
  },
  //another custom function we made that gets activated by submitting the button
  handleSubmitUser: function(e){
    //this prevents the default action of the button (whatever it may be)
    e.preventDefault();
    //This saves the username
    var username = this.state.username;
    //This resets the username value in case we click back
    this.setState({
      username: ''
    });

    if (this.props.routeParams.playerOne) {
      // go to /battle
      this.context.router.push({
        pathname: '/battle',
        query: {
          playerOne: this.props.routeParams.playerOne,
          playerTwo: this.state.username
        }
      })
    } else {
      //go to playerTwo
      //Can push with either an object (above) or a single line (below)
      this.context.router.push('/playerTwo/' + this.state.username)
    }
  },

  render: function(){
    return(
      <Prompt
      onSubmitUser={this.handleSubmitUser}
      onUpdateUser={this.handleUpdateUser}
      header={this.props.route.header}
      username={this.state.username}/>
    )
  }
});

module.exports = PromptContainer;
