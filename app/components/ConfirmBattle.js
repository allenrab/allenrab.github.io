var React = require('react');

//Stateless function
function ConfirmBattle (props) {
  // Uses ternary conditional here... condition ? expr1 : expr2
  return props.isLoading === true
    ? <p> Loading! </p>
    : <p> Confirm Battle </p>
}

module.exports = ConfirmBattle;
