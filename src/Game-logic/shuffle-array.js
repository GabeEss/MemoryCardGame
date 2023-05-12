export default function shuffleArray(gameboard) {
    const shuffledCards = gameboard.sort(() => Math.random() - 0.5);
    return shuffledCards;
}