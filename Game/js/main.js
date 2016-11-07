const React = require('react');
const ReactDOM = require('react-dom');
const GameMap = require('./ui/GameMap.react');

ReactDOM.render(
  <GameMap
    rows={3}
    cols={3}
  />,
  document.getElementById('content')
);
