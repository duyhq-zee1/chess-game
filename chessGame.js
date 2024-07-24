

class Board {
    constructor() {
        this.cell = [];
    }

    moveChessPiece() {
        
    }

    checkEndGame() {
        
    }

    setUpBoard() {
        
    }
}

class Cell {
    constructor(row, column, chessPiece) {
        this.row = row;
        this.column = column;
        this.chessPiece = chessPiece;
    }

    setChessPiece(chessPieceBase) {
        this.chessPiece = chessPieceBase;
    }

    getChessPiece() {
        return this.chessPiece;
    }
}
class Player {
    moveChessPiece() {
        
    }

    undoMove() {

    }

    redoMove() {

    }
}

class ChessPieceBase {
    moveStrategies = [];
}

class IMoveStrategy {
    doMove = () => { };
}

class MoveStraightStrategy extends IMoveStrategy {
    doMove = () => {
        console.log('Move straight');
    }
}

class MoveStraight1Strategy extends IMoveStrategy {
    doMove = () => {
        console.log('Move straight');
    }
}


class MaxRangeDecorator extends IMoveStrategy {
    constructor(strategy) {
        super();
        this.strategy = strategy;
    }

    doMove = () => {
        this.strategy.doMove();
        console.log('Max range');
    }
}

let maxRangeStraightMove = new MaxRangeDecorator(new MoveStraightStrategy());


class Game {
    constructor(board, history, whitePlayer, blackPlayer) {
        this.board = board;
        this.history = history;
        this.whitePlayer = whitePlayer;
        this.blackPlayer = blackPlayer;
    }

    startGame = () => {
        console.log("Start Game")
    }
    endGame = () => {
        console.log("End Game")
    }

    undoMove = () => {
        console.log("Undo Move")
    }

    redoMove = () => {
        console.log("Redo Move")
    }

    showHistory = () => {
        console.log("Show history")
    }

}


class history {
    constructor(board) {
        this.moves = [];
        this.board = board
    }

    undoMove = () => {
        console.log("Undo Move")
    }

    redoMove = () => {
        console.log("Redo Move")
    }

    showHistory = () => {
        console.log("Show history")
    }

    getMove = () => {
        console.log("Get Move")
    }

    addMove = () => {
        console.log("Add move")
    }
}

class historyMove {
    constructor(chessPiece, cell) {
        this.chessPiece = chessPiece;
        this.cell = cell;
    }
}


