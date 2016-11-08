const React = require('react');
const GameMap = require('./GameMap.react');
const GameState = require('../game_objects/GameState');
const ActionBar = require('./ActionBar.react');

class Game extends React.Component {
  constructor(props) {
    super(props);
    const game = GameState.createNewGame(2, this.props.rows, this.props.cols);
    this.state = {
      game,
    };
  }

  _takeTurn(x, y) {
    console.log(this.state);
    this.setState({
      game: this.state.game.takeTurn(x, y),
    });
  }

  render() {
    return(
      <div>
        <GameMap
          game={this.state.game}
          onTakeTurn={(x, y) => this._takeTurn(x, y)}
          {...this.props}/>
        <ActionBar
          game={this.state.game}
          {...this.props}/>
      </div>
    );
  }
}

module.exports = Game;
