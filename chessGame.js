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
    constructor(board, history, whilePlayer, blackPlayer) {
        this.board = board;
        this.history = history;
        this.whilePlayer = whilePlayer;
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