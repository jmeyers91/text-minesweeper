#!/usr/bin/env node

import Controls from './Controls';
import createGame from './createGame';
import renderGame from './renderGame';
import movePlayer from './movePlayer';
import placeMines from './placeMines';
import openCell from './openCell';
import flagCell from './flagCell';
import getCell from './getCell';

const width = (process.argv[2] && parseInt(process.argv[2], 10)) || 30;
const height = (process.argv[3] && parseInt(process.argv[3], 10)) || 30;
const mineCount =
  (process.argv[4] && parseInt(process.argv[4], 10)) || width * 2;

if (Number.isNaN(width)) {
  console.log(`Invalid width: ${process.argv[2]}`);
  process.exit(1);
}

if (Number.isNaN(height)) {
  console.log(`Invalid height: ${process.argv[3]}`);
  process.exit(1);
}

if (Number.isNaN(mineCount)) {
  console.log(`Invalid mine count: ${process.argv[4]}`);
  process.exit(1);
}

function startGame() {
  let game = createGame({
    width,
    height,
    mineCount
  });
  const controls = new Controls();

  controls.on('up', () => {
    game = movePlayer(game, 0, -1);
    renderGame(game);
  });

  controls.on('down', () => {
    game = movePlayer(game, 0, 1);
    renderGame(game);
  });

  controls.on('left', () => {
    game = movePlayer(game, -1, 0);
    renderGame(game);
  });

  controls.on('right', () => {
    game = movePlayer(game, 1, 0);
    renderGame(game);
  });

  controls.on('open', () => {
    const { playerX, playerY } = game;
    const cell = getCell(game, playerX, playerY);
    if (!cell || cell.isOpen || cell.isFlagged) {
      return;
    }
    if (!game.minesPlaced) {
      game = placeMines(game, playerX, playerY);
    }
    game = openCell(game, playerX, playerY);
    renderGame(game);
  });

  controls.on('flag', () => {
    const { playerX, playerY } = game;
    game = flagCell(game, playerX, playerY);
    renderGame(game);
  });

  controls.on('restart', () => {
    game = createGame({ width, height, mineCount });
    renderGame(game);
  });

  controls.on('quit', () => process.exit());

  renderGame(game);

  setInterval(() => renderGame(game), 500);
}

startGame();
