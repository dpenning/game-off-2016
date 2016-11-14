class GameMapUtils {
  static getAdjacentTiles(x, y, radius) {
    // get bounds of gameMap
    let tiles = [];
    let start_x = -radius;
    let end_x = radius;
    for (let delta_y = 0; delta_y <= radius; delta_y++) {
      for (let delta_x = start_x; delta_x <= end_x; delta_x++) {
        if (delta_y !== 0) {
          tiles.push({x: x + delta_x, y: y + delta_y});
          tiles.push({x: x + delta_x, y: y - delta_y});
        } else if(delta_x !== 0) {
          tiles.push({x: x + delta_x, y: y + delta_y});
        }
      }
      !!(delta_y % 2) ^ !!(y % 2) ? start_x += 1 : end_x -= 1;
    }

    return tiles;
  }
}

module.exports = GameMapUtils;
