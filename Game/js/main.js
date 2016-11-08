const React = require('react');
const ReactDOM = require('react-dom');
const Game = require('./ui/Game.react');

ReactDOM.render(
  <Game
    rows={3}
    cols={3}
  />,
  document.getElementById('content')
);
