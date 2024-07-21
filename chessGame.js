class ChessPieceBase {
    moveStrategies = [];
}

class IMoveStrategy {
    doMove = () => {};
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