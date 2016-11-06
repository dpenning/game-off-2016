const React = require('react');
const ReactDOM = require('react-dom');
const GameMap = require('./ui/GameMap.react');

ReactDOM.render(
  <div style={{margin: 30}}>
    <GameMap
      rows={5}
      cols={5}
    />
  </div>,
  document.getElementById('content')
);
