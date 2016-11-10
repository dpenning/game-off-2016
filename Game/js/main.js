const React = require('react');
const ReactDOM = require('react-dom');
const Game = require('./ui/Game.react');

ReactDOM.render(
  <Game
    rows={2}
    cols={2}
  />,
  document.getElementById('content')
);
