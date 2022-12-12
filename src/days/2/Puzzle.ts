import Puzzle from '../../types/AbstractPuzzle';

const MAP_CHOICE_TO_POINTS: Record<string, number> = {
  A: 1,
  B: 2,
  C: 3,
  X: 1,
  Y: 2,
  Z: 3
};

const MAP_CHOICE_TO_ACTION: Record<string, 'ROCK' | 'PAPER' | 'SCISSORS'> = {
  A: 'ROCK',
  B: 'PAPER',
  C: 'SCISSORS',
  X: 'ROCK',
  Y: 'PAPER',
  Z: 'SCISSORS'
};

const MAP_ACTION_TO_OWN_CHOICE: Record<string, string> = {
  'ROCK': 'A',
  'PAPER': 'B',
  'SCISSORS': 'C',
};

export default class Day2 extends Puzzle {
  private roundResult(opponent: string, own: string): number {
    const basePoints = MAP_CHOICE_TO_POINTS[own];

    const [opponentAction, ownAction] = [
      MAP_CHOICE_TO_ACTION[opponent],
      MAP_CHOICE_TO_ACTION[own]
    ];

    if (opponentAction === ownAction) {
      return basePoints + 3;
    }

    if (opponentAction === 'ROCK' && ownAction === 'PAPER') {
      return basePoints + 6;
    }

    if (opponentAction === 'PAPER' && ownAction === 'SCISSORS') {
      return basePoints + 6;
    }

    if (opponentAction === 'SCISSORS' && ownAction === 'ROCK') {
      return basePoints + 6;
    }

    return basePoints;
  }

  public solvePartOne(): string {
    const lines = this.input.trim().split('\n');

    let total = 0;
    for (const line of lines) {
      const [opponent, own] = line.split(' ');
      const round = this.roundResult(opponent, own);

      total += round;
    }

    return total.toString();
  }

  public getPartOneExpectedResult(): string {
    return '13484';
  }

  public solvePartTwo(): string {
    const lines = this.input.trim().split('\n');

    let total = 0;
    for (const line of lines) {
      const [opponent, action] = line.split(' ');
      let own;

      const opponentAction = MAP_CHOICE_TO_ACTION[opponent];

      if (opponentAction === 'PAPER') {
        if (action === 'X') {
          own = 'ROCK';
        }

        if (action === 'Y') {
          own = 'PAPER';
        }

        if (action === 'Z') {
          own = 'SCISSORS';
        }
      }

      if (opponentAction === 'ROCK') {
        if (action === 'X') {
          own = 'SCISSORS';
        }

        if (action === 'Y') {
          own = 'ROCK';
        }

        if (action === 'Z') {
          own = 'PAPER';
        }
      }

      if (opponentAction === 'SCISSORS') {
        if (action === 'X') {
          own = 'PAPER';
        }

        if (action === 'Y') {
          own = 'SCISSORS';
        }

        if (action === 'Z') {
          own = 'ROCK';
        }
      }

      const round = this.roundResult(opponent, MAP_ACTION_TO_OWN_CHOICE[own]);

      total += round;
    }

    return total.toString();
  }

  public getPartTwoExpectedResult(): string {
    return '13433';
  }
}
