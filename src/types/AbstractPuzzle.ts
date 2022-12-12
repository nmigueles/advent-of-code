import { PuzzleInterface } from './PuzzleInterface';

export default abstract class Puzzle implements PuzzleInterface {
    protected example: string;
    protected input: string;

    public async setInput(input: string) {
        this.input = input;
    }

    public async setExample(example: string) {
        this.example = example;
    }

    public abstract solvePartOne(): string;

    public abstract getPartOneExpectedResult(): string;

    public abstract solvePartTwo(): string;

    public abstract getPartTwoExpectedResult(): string;
}
