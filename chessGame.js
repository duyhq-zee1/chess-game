class ChessPieceBase {
  moveStrategies = [];

  setPlayer = (player) => {};

  checkAvailableMoveCells = () => {};

  doMove = () => {};
}

class IMoveStrategy {
  checkAvailableMoveCells = () => {};

  doMove = () => {};
}

class MoveStraight extends IMoveStrategy {
  checkAvailableMoveCells = () => {};

  doMove = () => {};
}

class MoveDiagonal extends IMoveStrategy {
  checkAvailableMoveCells = () => {};

  doMove = () => {};
}

class MoveL extends IMoveStrategy {
  checkAvailableMoveCells = () => {};

  doMove = () => {};
}

class MaxRangeDecorator extends IMoveStrategy {
  constructor(move) {
    this.move = move;
  }

  checkAvailableMoveCells = () => {};

  doMove = () => {};
}

class OnlyFowardDecorator extends IMoveStrategy {
  constructor(move) {
    this.move = move;
  }

  checkAvailableMoveCells = () => {};

  doMove = () => {};
}

class Game {
  constructor(board, history, whilePlayer, blackPlayer) {
    this.board = board;
    this.history = history;
    this.whilePlayer = whilePlayer;
    this.blackPlayer = blackPlayer;
  }

  startGame = () => {
    console.log('Start Game');
  };
  endGame = () => {
    console.log('End Game');
  };

  undoMove = () => {
    console.log('Undo Move');
  };

  redoMove = () => {
    console.log('Redo Move');
  };

  showHistory = () => {
    console.log('Show history');
  };
}

class history {
  constructor(board) {
    this.moves = [];
    this.board = board;
  }

  undoMove = () => {
    console.log('Undo Move');
  };

  redoMove = () => {
    console.log('Redo Move');
  };

  showHistory = () => {
    console.log('Show history');
  };

  getMove = () => {
    console.log('Get Move');
  };

  addMove = () => {
    console.log('Add move');
  };
}

class historyMove {
  constructor(chessPiece, cell) {
    this.chessPiece = chessPiece;
    this.cell = cell;
  }
}
