const React = require('react');
const GameMap = require('./GameMap.react');
const GameState = require('../game_objects/GameState');
const ActionBar = require('./ActionBar.react');
const TileTypes = require('../game_objects/tiles/TileTypes');

class Game extends React.Component {
  constructor(props) {
    super(props);
    const game = GameState.createNewGame(2, this.props.rows, this.props.cols);
    const selectedTile = 'Worm';
    this.state = {
      game,
      selectedTile,
    };
  }

  _takeTurn(x, y) {
    const Tile = TileTypes[this.state.selectedTile];
    const tileToPlay = new Tile(
      this.state.game.getCurrentPlayer().getID()
    );
    if (this.state.game.isValidTurn(x, y, tileToPlay)) {
      this.setState({
        selectedTile: 'Worm',
        game: this.state.game.takeTurn(
          x, y,
          tileToPlay
        ),
      });
    }
  }

  render() {
    const SelectedTileType = TileTypes[this.state.selectedTile];
    const selectedTile = new SelectedTileType(
        this.state.game.getCurrentPlayer().getID()
    );
    return(
      <div>
        <GameMap
          game={this.state.game}
          onTakeTurn={(x, y) => this._takeTurn(x, y)}
          selectedTile={selectedTile}
          {...this.props}/>
        <ActionBar
          game={this.state.game}
          selectedTile={selectedTile}
          onSelectTileType={(selectedTile) => {
            this.setState({
              selectedTile: selectedTile,
            });
          }}
          {...this.props}/>
      </div>
    );
  }
}

module.exports = Game;
