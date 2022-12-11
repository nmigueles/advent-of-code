import Puzzle from '../../types/AbstractPuzzle';

export default class Day1 extends Puzzle {
    private convertToInventories(): number[] {
        const lines = this.input.trim().split("\n")
        const inventories: number[] = [];
        let sum = 0;
        for (const line of lines) {
            if (line === "") {
                inventories.push(sum);
                sum = 0;
                continue;
            }

            sum += Number(line);
        }
        return inventories;
    }

    public solveFirst(): string {
        return Math.max(...this.convertToInventories()).toString();
    }

    public solveSecond(): string {
        const ordered = this.convertToInventories().sort((a,b) => a - b).reverse();
        console.log(ordered);
        return ordered.slice(0, 3).reduce((total, a) => {
            total += a; return total
        }, 0).toString();
    }

    public getFirstExpectedResult(): string {
        return '72478';
    }

    public getSecondExpectedResult(): string {
        return '210367';
    }
}
