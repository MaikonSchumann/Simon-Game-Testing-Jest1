const { game, newGame, showScore } = require('../game');

beforeAll(() => {
    let fs = require('fs');
    let fileContents = fs.readFileSync("index.html", "utf-8");
    document.open();
    document.write(fileContents);
    document.close();
});

describe("game object contains correct keys", () => {
    test("score keys exists", () => {
        expect('score' in game).toBe(true);
    });
    test("currentGame key exists", () => {
      expect("currentGame" in game).toBe(true);
    });
    test("playerMovies key exists", () => {
      expect("playerMoves" in game).toBe(true);
    });
    test("choices key exists", () => {
      expect("choices" in game).toBe(true);
    });
    test("choices contain correct ids", () => {
        expect(game.choices).toEqual(["button1", "button2", "button3", "button4"]);
    })
});

describe("new game", () => {
    beforeAll(() => {
        game.score = 42;
        game.playerMoves = [1,2,3];
        game.currentGame = [1,2,3];
        document.getElementById('score').innerText = '42';
        newGame();
    });
    test('should set game score to zero', () => {
        expect(game.score).toEqual(0)
    });
    test('should clear te player moves array', () => {
        expect(game.playerMoves).toEqual([]);
    });
    test("should clear te current game array", () => {
      expect(game.currentGame).toEqual([]);
    });
    test('should display 0 for the element with id of score', () => {
        expect(document.getElementById('score').innerText).toEqual(0);
    });
});


