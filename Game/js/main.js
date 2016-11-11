const React = require('react');
const ReactDOM = require('react-dom');
const Game = require('./ui/Game.react');

ReactDOM.render(
  <Game
    rows={7}
    cols={7}
  />,
  document.getElementById('content')
);
