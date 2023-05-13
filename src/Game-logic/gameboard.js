import createCard from "./memorycard";
import { round1, round2, round3 } from "./round-length";

export default function createBoard(round) {
    let gameboard = [];

    if(round === 1) {
        for(let i = 0; i < round1; i++) {
            gameboard.push(createCard(i + 1));
        }
    } else if(round === 2) {
        for(let i = 0; i < round2; i++) {
            gameboard.push(createCard(i + 1));
        }
    } else if(round === 3) {
        for(let i = 0; i < round3; i++) {
            gameboard.push(createCard(i + 1));
        }
    }

    return gameboard;
}