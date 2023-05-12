// 'number' is the value of the chosen card.
// 'track' is the object containing the properties to track the picks
export default function makeChoice(number, track) {
    if(track.checkPicks(number)) {
        return true; // game over
    }
    else {
        track.addPick(number); // add the pick to the set
        return false;
    }
}