import createCard from "./memorycard"

export default function createBoard(round) {
    let gameboard = [];

    if(round === 1) {
        for(let i = 0; i < 6; i++) {
            gameboard.push(createCard(i + 1));
        }
    } else if(round === 2) {
        for(let i = 0; i < 10; i++) {
            gameboard.push(createCard(i + 1));
        }
    } else if(round === 3) {
        for(let i = 0; i < 20; i++) {
            gameboard.push(createCard(i + 1));
        }
    }

    return gameboard;
}