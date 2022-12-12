import { readdirSync } from 'fs';
import { PuzzleInterface } from './types/PuzzleInterface';
import PuzzleFactory from './utils/PuzzleFactory';

describe('AoC test runner', () => {
  const dirs = readdirSync('./src/days', { withFileTypes: true })
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => dirent.name);

  for (const day of dirs) {
    it(`Tests day ${day} - Part 1`, async () => {
      const puzzle: PuzzleInterface = await PuzzleFactory.getPuzzle(day);
      expect(puzzle.solvePartOne()).toEqual(puzzle.getPartOneExpectedResult());
    });
    
    it(`Tests day ${day} - Part 2`, async () => {
      const puzzle: PuzzleInterface = await PuzzleFactory.getPuzzle(day);
      expect(puzzle.solvePartTwo()).toEqual(puzzle.getPartTwoExpectedResult());
    });
  }
});
